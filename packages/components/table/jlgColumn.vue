<!--
@name: jlg-column
@description: 基于`vxe-column` 组件封装, 新增自适应列宽功能（支持简单的自定义内容）; 暂不支持自定义内容中存在过于复杂的组件、多级表头table
@author: yqb
@time: "2022/7/5"
-->
<template>
  <vxe-colgroup
    v-if="props.children && props.children.length > 0"
    :class-name="className"
    :visible="props.visible || false"
    :min-width="minColWidth"
    :formatter="props.formatter"
    v-bind="$attrs"
  >
    <!-- 嵌套多级表头 -->
    <jlg-column
      v-for="(item, index) in props.children"
      :key="item.field + '-' + item.title + '-' + index"
      :field="item.field"
      :title="item.title"
      :fixed="item.fixed"
      :header-align="item.headerAlign || undefined"
      :align="item.align || 'left'"
      :sortable="false"
      :width="item.width"
      :formatter="item.formatter"
      :min-width="item.minWidth || 100"
      :is-auto-fit="item.isAutoFit || false"
      :children="item.children"
      :visible="item.visible"
      :cell-render="item.cellRender"
    >
      <template #header="{ column }">
        <span>{{ column.title }}</span>
        <span style="color: #4381e6">{{
            " " + setSortIndex(column.field)
          }}</span>
      </template>
      <!-- slot 自定义列-->
      <template v-if="item.type === 'slot'" v-slot="scope">
        <slot :name="'col-' + item.field" :row="scope.row" :data="scope" />
      </template>
    </jlg-column>
  </vxe-colgroup>
  <vxe-column
    v-else
    v-bind="$attrs"
    :class-name="className"
    :visible="props.visible || false"
    :min-width="minColWidth"
    :formatter="props.formatter"
  >
    <template v-if="$slots.header" v-slot:header="scope">
      <slot name="header" :column="scope.column" :data="scope" />
    </template>
    <template v-if="$slots.default" v-slot="scope">
      <slot :row="scope.row" :column="scope.column" :$index="scope.$index" />
    </template>
  </vxe-column>
</template>

<!-- 组合式API setup语法糖 -->
<script lang="ts" setup>
import { PropType } from "vue";
import { JlgColumnProps } from "../../types";
import {
  nextTick,
  reactive,
  computed,
  watch,
  useSlots,
  useAttrs,
  inject
} from "vue";

const tableGather = inject("$tableGather");
const setSortIndex = inject("$setSortIndex");
const slots = useSlots();
const attrs = useAttrs();

const props = defineProps({
  // 是否可视
  visible: {
    type: Boolean,
    default: true
  },
  // 列最小宽度，把剩余宽度按比例分配
  minWidth: {
    type: [Number, String],
    default: "100px"
  },
  // 是否自适应列宽, 默认false
  isAutoFit: {
    type: Boolean,
    default: false
  },
  // 格式化显示内容
  formatter: [Function, Array, String],
  children: {
    type: Array as PropType<JlgColumnProps[]>,
    default: () => {
      return [];
    }
  }
});
const state = reactive({
  minLength: 5,
  getComputedWidth: 0 // 自定义列中获取元素计算的宽度
});

const sortable = computed(() => {
  return (tableGather || {}).props.sortable;
});
const values = computed(() => {
  if (!props.isAutoFit) return [];
  // 个别页面可能存在 field 是 'aaa.bbb'的写法
  const propArray = attrs.field ? (attrs.field as string).split(".") : [];
  // 可能存在多级表头，不能简单通过的 $parent 获取数据
  const data = tableGather.props?.data || [];
  return data.map(item => {
    return propArray.length > 1
      ? item[propArray[0]][propArray[1]]
      : item[attrs.field as string];
  });
});
// 为存在scope的添加className
const className = computed(() => {
  const parentClass = (attrs["class-name"] || "") as string;
  const classPre = (attrs.field ||
    "encode-".concat(transChar(attrs.title))) as string; // 有的列因为有slotScope而不给field

  return classPre
    ? "".concat(parentClass, " ").concat(classPre, "-column")
    : "";
});
const minColWidth = computed(() => {
  if (!attrs.title) return undefined;
  if (!props.isAutoFit) return props.minWidth || undefined;
  let titleElementLength =
    Number((attrs.title as string).length) *
    fontRate.value.CHAR_RATE *
    Number(fontSize.value);
  const maxOne = Math.max(
    state.minLength * Number(fontSize.value) + 20,
    titleElementLength + 50
  );
  return attrs.width || Math.ceil(Math.max(maxOne, state.getComputedWidth));
});
const fontSize = computed(() => {
  return attrs.fontSize || 14;
});
const fontRate = computed(() => {
  return {
    CHAR_RATE: 1.1,
    // 汉字比率
    NUM_RATE: 0.65,
    // 数字
    OTHER_RATE: 0.5 // 除汉字和数字以外的字符的比率
  };
});

watch(values, () => {
  nextTick(() => {
    setColdWidth();
  });
});
watch(
  () => props.isAutoFit,
  () => {
    nextTick(() => {
      setColdWidth();
    });
  }
);
function setColdWidth() {
  !!props.isAutoFit &&
    nextTick(() => {
      // 详情中的列表需要在nextTick才能生效
      if (slots.default || attrs["cell-render"] || !!props.formatter) {
        // 存在自定义节点或者存在 formatter
        setTimeout(() => {
          // 首次可能获取不到子节点, setTimeout才行
          const parentEl = tableGather.xTable.value?.$el;
          const bodyWrapper = parentEl.querySelector(
            ".vxe-table--render-wrapper"
          );
          const nodes = bodyWrapper.querySelectorAll(
            ".".concat(
              (attrs.field as string) ||
                "encode-".concat(transChar(attrs.title)),
              "-column"
            )
          );
          if (nodes.length) {
            // 有可能会来不及获取nodes, 就切换菜单进入下一页了, 再研究吧
            const target = [];
            const getComputedWidths = [];
            Array.from(nodes).map((item: HTMLElement): void => {
              target.push(item.innerText as string);
              // 有可能存在自定义列内容超出容器, 取 scrollWidth 才行
              getComputedWidths.push(
                item.querySelector(".vxe-cell").scrollWidth
              );
            });
            state.getComputedWidth = Math.max.apply(Math, getComputedWidths);
            state.minLength = getMaxLength(target);
          }
        }, 0);
      } else {
        state.minLength = getMaxLength(values.value);
      }
    });
}
// 获取数组中元素按字体比例最长长度
function getMaxLength(arr) {
  return arr.reduce((length, item) => {
    if (item) {
      const str = item.toString();
      const char = str.match(/[\u2E80-\u9FFF]/g);
      const charLength = char ? char.length : 0;
      const num = str.match(/\d|\./g);
      const numLength = num ? num.length : 0;
      const otherLength = str.length - charLength - numLength;
      let newLength =
        charLength * fontRate.value.CHAR_RATE +
        numLength * fontRate.value.NUM_RATE +
        otherLength * fontRate.value.OTHER_RATE;
      if (str.includes("\n")) {
        newLength = getMaxLength(str.split("\n"));
      }

      if (length < newLength) {
        length = newLength;
      }
    }
    return length;
  }, 0);
}
// 转换汉字为class支持的字母
function transChar(char) {
  return encodeURIComponent(char).replace(/[^a-zA-z]/g, "eUC");
}
</script>

<style lang="scss" scoped></style>
