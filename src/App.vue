<template>
	<div>
		<el-button type="primary" @click="openModal(1)">打开弹窗</el-button>
		<el-button type="primary" @click="openModal(2)">打开弹窗2</el-button>
		<el-button type="primary" @click="openModal(3)">打开弹窗3</el-button>
		<el-button type="primary" @click="$jdm.closeAll()">删除所有</el-button>
		<jlg-modals-container ref="modalsContainer" />
		<jlg-table
			ref="table"
			:api="getList"
			:check-box="false"
			v-model:data="tableInfo.data"
			v-model:columns="tableInfo.fieldList"
			:handle="tableInfo.handle"
			:is-pagination="true"
		>
			<template #buttons>
				<el-button size="small">新增</el-button>
			</template>
			<template #tools>www</template>
		</jlg-table>
	</div>
</template>

<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import type { JlgFormInstance } from 'jlg-admin-components'
import {
	$jdm,
	ModalsContainer as JlgModalsContainer
} from 'jlg-admin-components'
import ModalDemo from '../src/views/modal_a/index.vue'

import JlgTable from '../packages/components/table/index.vue'
import { ElMessageBox } from 'element-plus'
import { JlgColumnProps } from '../packages'
let formRef = ref<JlgFormInstance>()
formRef.value?.submit().then((res) => {
	console.log(res)
})

let formData = ref({
	name: 'jlg',
	age: 18
})

const tableInfo = reactive<{
	data: any
	fieldList: JlgColumnProps[]
	handle: any
}>({
	data: [],
	fieldList: [
		{
			title: 'Id',
			field: 'id'
		},
		{
			title: '配送公司',
			field: 'companyName'
		},
		{
			title: '所属省份',
			field: 'provinceName'
		},
		{
			title: '所属市区',
			field: 'cityName'
		},
		{
			title: '注册地址',
			field: 'registerAddress',
			minWidth: 140
		},
		{
			title: '统一社会信用代码',
			field: 'creditCode',
			minWidth: 140
		},
		{
			title: '公司类型',
			field: 'companyTypeText',
      formatter: ({ cellValue }) => {
        return cellValue
      },
			minWidth: 140
		}
	],
	handle: {}
})

const openModal = (id: number) => {
	$jdm.show({
		name: 'modal' + id,
		component: ModalDemo,
		bind: {
			title: '弹窗' + id,
			width: '40%',
			beforeCloseMethod: () => {
				return new Promise((resolve) => {
					if (id !== 2) {
						resolve(true)
						return
					}
					ElMessageBox.confirm('确定要关闭弹窗2吗？', '提示', {
						confirmButtonText: 'yes',
						cancelButtonText: 'no',
						type: 'warning'
					})
						.then(() => {
							resolve(true)
						})
						.catch(() => {
							resolve(new Error())
						})
				})
			},
			//自定义参数
			custom: 999
		},
		on: {
			customEvent: (data: string) => {
				debugger
				console.log(data)
			},
			hide: () => {
				console.log('hide')
			},
			close: (data: string | null) => {
				debugger
				console.log('close', data)
			}
		}
	})
}
const getList = async () => {
	return new Promise<any>((resolve) => {
		setTimeout(() => {
			resolve({
				item1: [
					{
						id: 84,
						companyCode: 'ET000690',
						companyName: '宜美人-B配送公司',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 430000,
						provinceName: '湖南省',
						cityId: 431000,
						cityName: '郴州市',
						haidianCode: null,
						creditCode: '宜美人-B配送公司-统一社会信用代码',
						mainBusiness: null,
						introduction: null,
						registerAddress: '宜美人-B配送公司-注册地址'
					},
					{
						id: 83,
						companyCode: 'ET000762',
						companyName: '123dasdasd',
						state: null,
						companyRoleType: 1,
						companyRoleTypeText: '[{"RoleType":1,"RoleTypeText":"内部企业"}]',
						companyType: 2,
						companyTypeText: '[{"ComType":2,"ComTypeText":"药物研发机构"}]',
						provinceId: 110000,
						provinceName: '北京',
						cityId: null,
						cityName: null,
						haidianCode: null,
						creditCode: '21',
						mainBusiness: null,
						introduction: null,
						registerAddress: null
					},
					{
						id: 82,
						companyCode: 'ET000718',
						companyName: '123',
						state: null,
						companyRoleType: 1,
						companyRoleTypeText: '[{"RoleType":1,"RoleTypeText":"内部企业"}]',
						companyType: 2,
						companyTypeText: '[{"ComType":2,"ComTypeText":"药物研发机构"}]',
						provinceId: 110000,
						provinceName: '北京',
						cityId: null,
						cityName: null,
						haidianCode: null,
						creditCode: '123123',
						mainBusiness: null,
						introduction: null,
						registerAddress: null
					},
					{
						id: 81,
						companyCode: 'ET000716',
						companyName: '1123123123',
						state: null,
						companyRoleType: 1,
						companyRoleTypeText: '[{"RoleType":1,"RoleTypeText":"内部企业"}]',
						companyType: 2,
						companyTypeText: '[{"ComType":2,"ComTypeText":"药物研发机构"}]',
						provinceId: 110000,
						provinceName: '北京',
						cityId: null,
						cityName: null,
						haidianCode: null,
						creditCode: '1',
						mainBusiness: null,
						introduction: null,
						registerAddress: null
					},
					{
						id: 78,
						companyCode: 'ET000705',
						companyName: '王元肉内部企业',
						state: 1,
						companyRoleType: 1,
						companyRoleTypeText: '[{"RoleType":1,"RoleTypeText":"内部企业"}]',
						companyType: 8,
						companyTypeText: '[{"ComType":8,"ComTypeText":"全国总营销企业"}]',
						provinceId: 430000,
						provinceName: '湖南省',
						cityId: null,
						cityName: null,
						haidianCode: null,
						creditCode: '王元肉内部企业统一社会信用代码',
						mainBusiness: null,
						introduction: null,
						registerAddress: null
					},
					{
						id: 77,
						companyCode: 'ET000704',
						companyName: '王元肉上游企业',
						state: 1,
						companyRoleType: 2,
						companyRoleTypeText: '[{"RoleType":2,"RoleTypeText":"上游企业"}]',
						companyType: 16,
						companyTypeText: '[{"ComType":16,"ComTypeText":"受托生产企业"}]',
						provinceId: 430000,
						provinceName: '湖南省',
						cityId: 430100,
						cityName: '长沙市',
						haidianCode: null,
						creditCode: 'TYSHBM20221213',
						mainBusiness: null,
						introduction: null,
						registerAddress: null
					},
					{
						id: 75,
						companyCode: 'ET000661',
						companyName: 'A-001',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 430000,
						provinceName: '湖南省',
						cityId: 431000,
						cityName: '郴州市',
						haidianCode: null,
						creditCode: 'A-001-0001',
						mainBusiness: null,
						introduction: null,
						registerAddress: '湖南省郴州市北湖区'
					},
					{
						id: 74,
						companyCode: 'ET000632',
						companyName: '蜜桃-A配送公司',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 440000,
						provinceName: '广东省',
						cityId: 440100,
						cityName: '广州市',
						haidianCode: null,
						creditCode: 'GZ10000',
						mainBusiness: null,
						introduction: null,
						registerAddress: '小蛮腰'
					},
					{
						id: 73,
						companyCode: 'ET000622',
						companyName: '宜美人-H配送公司',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 330000,
						provinceName: '浙江省',
						cityId: 330100,
						cityName: '杭州市',
						haidianCode: null,
						creditCode: 'ADC10086',
						mainBusiness: null,
						introduction: null,
						registerAddress: '宜美人-H配送公司-注册地址（浙江省杭州市）'
					},
					{
						id: 72,
						companyCode: 'ET000626',
						companyName: '宜美人-Q配送公司',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 140000,
						provinceName: '山西省',
						cityId: 140100,
						cityName: '太原市',
						haidianCode: null,
						creditCode: 'BK2022',
						mainBusiness: null,
						introduction: null,
						registerAddress: '宜美人-Q配送公司-山西省-太原市'
					},
					{
						id: 71,
						companyCode: 'ET000623',
						companyName: 'cap测试11',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 140000,
						provinceName: '山西省',
						cityId: 140400,
						cityName: '长治市',
						haidianCode: null,
						creditCode: 'cap测试11',
						mainBusiness: null,
						introduction: null,
						registerAddress: 'cap测试11'
					},
					{
						id: 70,
						companyCode: 'ET000612',
						companyName: '中国石化-A配送企业',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 370000,
						provinceName: '山东省',
						cityId: 370100,
						cityName: '济南市',
						haidianCode: null,
						creditCode: 'A-2022-11-22',
						mainBusiness: null,
						introduction: null,
						registerAddress: '中国石化-A配送企业-注册地址'
					},
					{
						id: 69,
						companyCode: 'ET000589',
						companyName: '测试上游企业',
						state: 1,
						companyRoleType: 2,
						companyRoleTypeText: '[{"RoleType":2,"RoleTypeText":"上游企业"}]',
						companyType: 272,
						companyTypeText:
							'[{"ComType":16,"ComTypeText":"受托生产企业"},{"ComType":256,"ComTypeText":"上游销售区域"}]',
						provinceId: 430000,
						provinceName: '湖南省',
						cityId: 430100,
						cityName: '长沙市',
						haidianCode: null,
						creditCode: '2919',
						mainBusiness: '主营业务出售',
						introduction: null,
						registerAddress: '注册地址长沙'
					},
					{
						id: 68,
						companyCode: 'ET000581',
						companyName: '宜美人-Z配送企业',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 140000,
						provinceName: '山西省',
						cityId: 140300,
						cityName: '阳泉市',
						haidianCode: null,
						creditCode: '宜美人-Z配送企业-统一社会信用代码',
						mainBusiness: '宜美人-Z配送企业-主营业务',
						introduction: null,
						registerAddress: '宜美人-Z配送企业-注册地址'
					},
					{
						id: 67,
						companyCode: 'ET000576',
						companyName: '一月配送公司',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 140000,
						provinceName: '山西省',
						cityId: 140500,
						cityName: '晋城市',
						haidianCode: null,
						creditCode: '8909920901291211',
						mainBusiness: null,
						introduction: null,
						registerAddress: '呵呵呵地址'
					},
					{
						id: 66,
						companyCode: 'ET000569',
						companyName: '宜美人-A配送企业',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 140000,
						provinceName: '山西省',
						cityId: 140100,
						cityName: '太原市',
						haidianCode: null,
						creditCode: '宜美人-A配送企业-统一社会信用代码',
						mainBusiness: '宜美人-A配送企业-主营业务',
						introduction: '宜美人-A配送企业-公司简介',
						registerAddress: '宜美人-A配送企业-注册地址'
					},
					{
						id: 65,
						companyCode: 'ET000555',
						companyName: 'π-供应商-企业名称',
						state: 1,
						companyRoleType: 2,
						companyRoleTypeText: '[{"RoleType":2,"RoleTypeText":"上游企业"}]',
						companyType: 32,
						companyTypeText:
							'[{"ComType":32,"ComTypeText":"上游上市许可持有人"}]',
						provinceId: 440000,
						provinceName: '广东省',
						cityId: 440100,
						cityName: '广州市',
						haidianCode: '100050',
						creditCode: 'π-供应商-统一社会信用代码',
						mainBusiness: 'π-供应商-主营业务',
						introduction: 'π-供应商-公司简介',
						registerAddress: 'π-供应商-注册地址'
					},
					{
						id: 64,
						companyCode: 'ET000554',
						companyName: 'π-购货单位//出库单位-企业名称',
						state: 1,
						companyRoleType: 2,
						companyRoleTypeText: '[{"RoleType":2,"RoleTypeText":"上游企业"}]',
						companyType: 880,
						companyTypeText:
							'[{"ComType":16,"ComTypeText":"受托生产企业"},{"ComType":32,"ComTypeText":"上游上市许可持有人"},{"ComType":64,"ComTypeText":"全总营销企业"},{"ComType":256,"ComTypeText":"上游销售区域"},{"ComType":512,"ComTypeText":"其他上游企业"}]',
						provinceId: 420000,
						provinceName: '湖北省',
						cityId: 420100,
						cityName: '武汉市',
						haidianCode: null,
						creditCode: 'π-购货单位//出库单位-企业名称-统一社会信用代码',
						mainBusiness: 'π-购货单位//出库单位-企业名称-主营业务',
						introduction: 'π-购货单位//出库单位-企业名称-公司简介',
						registerAddress: 'π-购货单位//出库单位-企业名称-注册地址'
					},
					{
						id: 63,
						companyCode: 'ET000550',
						companyName: '西兰花配送企业',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 140000,
						provinceName: '山西省',
						cityId: 140500,
						cityName: '晋城市',
						haidianCode: null,
						creditCode: '998100929291111',
						mainBusiness: null,
						introduction: null,
						registerAddress: '这是我的收货地址'
					},
					{
						id: 62,
						companyCode: 'ET000548',
						companyName: '全角色企业1',
						state: 1,
						companyRoleType: 7,
						companyRoleTypeText:
							'[{"RoleType":2,"RoleTypeText":"上游企业"},{"RoleType":1,"RoleTypeText":"内部企业"},{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 16382,
						companyTypeText:
							'[{"ComType":16,"ComTypeText":"受托生产企业"},{"ComType":32,"ComTypeText":"上游上市许可持有人"},{"ComType":256,"ComTypeText":"上游销售区域"},{"ComType":4,"ComTypeText":"内部上市许可持有人"},{"ComType":64,"ComTypeText":"全总营销企业"},{"ComType":512,"ComTypeText":"其他上游企业"},{"ComType":2,"ComTypeText":"药物研发机构"},{"ComType":8,"ComTypeText":"全国总营销企业"},{"ComType":128,"ComTypeText":"内部受托生产企业"},{"ComType":8192,"ComTypeText":"集团总部"},{"ComType":1024,"ComTypeText":"中间商"},{"ComType":4096,"ComTypeText":"其他下游企业"},{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 430000,
						provinceName: '湖南省',
						cityId: 430100,
						cityName: '长沙市',
						haidianCode: null,
						creditCode: '124346782468127',
						mainBusiness: '主营业务很少',
						introduction: '公司简介',
						registerAddress: '火星镇'
					},
					{
						id: 61,
						companyCode: 'ET000523',
						companyName: '威威企业',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 120000,
						provinceName: '天津',
						cityId: 120100,
						cityName: '天津市',
						haidianCode: null,
						creditCode: '18922111111',
						mainBusiness: null,
						introduction: null,
						registerAddress: null
					},
					{
						id: 60,
						companyCode: 'ET000521',
						companyName: '海路名企业',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 7168,
						companyTypeText:
							'[{"ComType":1024,"ComTypeText":"中间商"},{"ComType":2048,"ComTypeText":"配送企业"},{"ComType":4096,"ComTypeText":"其他下游企业"}]',
						provinceId: 210000,
						provinceName: '辽宁省',
						cityId: 210700,
						cityName: '锦州市',
						haidianCode: null,
						creditCode: '910290129122',
						mainBusiness: '主营业务',
						introduction: null,
						registerAddress: '辽宁的注册地址'
					},
					{
						id: 59,
						companyCode: 'ET000518',
						companyName: 'c企业',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 130000,
						provinceName: '河北省',
						cityId: 130700,
						cityName: '张家口市',
						haidianCode: null,
						creditCode: '891290121212',
						mainBusiness: null,
						introduction: null,
						registerAddress: null
					},
					{
						id: 58,
						companyCode: 'ET000514',
						companyName: '唯一配送',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 150000,
						provinceName: '内蒙古自治区',
						cityId: 150700,
						cityName: '呼伦贝尔市',
						haidianCode: '100026',
						creditCode: '99999000009999',
						mainBusiness: null,
						introduction: null,
						registerAddress: null
					},
					{
						id: 57,
						companyCode: 'ET000496',
						companyName: '完美配送',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 110000,
						provinceName: '北京',
						cityId: 110100,
						cityName: '北京市',
						haidianCode: null,
						creditCode: '199900019991',
						mainBusiness: null,
						introduction: null,
						registerAddress: null
					},
					{
						id: 56,
						companyCode: 'ET000490',
						companyName: '嘻嘻嘻',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 120000,
						provinceName: '天津',
						cityId: 120100,
						cityName: '天津市',
						haidianCode: null,
						creditCode: 'A1008610010',
						mainBusiness: null,
						introduction: null,
						registerAddress: null
					},
					{
						id: 55,
						companyCode: 'ET000491',
						companyName: '来了配送',
						state: 1,
						companyRoleType: 4,
						companyRoleTypeText: '[{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 2048,
						companyTypeText: '[{"ComType":2048,"ComTypeText":"配送企业"}]',
						provinceId: 120000,
						provinceName: '天津',
						cityId: 120100,
						cityName: '天津市',
						haidianCode: null,
						creditCode: '222121212',
						mainBusiness: null,
						introduction: null,
						registerAddress: null
					},
					{
						id: 54,
						companyCode: 'ET000489',
						companyName: '五河配送企业',
						state: 1,
						companyRoleType: 6,
						companyRoleTypeText:
							'[{"RoleType":2,"RoleTypeText":"上游企业"},{"RoleType":4,"RoleTypeText":"下游企业"}]',
						companyType: 8032,
						companyTypeText:
							'[{"ComType":256,"ComTypeText":"上游销售区域"},{"ComType":512,"ComTypeText":"其他上游企业"},{"ComType":1024,"ComTypeText":"中间商"},{"ComType":2048,"ComTypeText":"配送企业"},{"ComType":4096,"ComTypeText":"其他下游企业"},{"ComType":64,"ComTypeText":"全总营销企业"},{"ComType":32,"ComTypeText":"上游上市许可持有人"}]',
						provinceId: 140000,
						provinceName: '山西省',
						cityId: 140300,
						cityName: '阳泉市',
						haidianCode: null,
						creditCode: '1892282812121',
						mainBusiness: '112222',
						introduction: '公司简介',
						registerAddress: '注册地址--1111'
					},
					{
						id: 50,
						companyCode: 'ET000483',
						companyName: '芙蓉王长沙分公司',
						state: 1,
						companyRoleType: 2,
						companyRoleTypeText: '[{"RoleType":2,"RoleTypeText":"上游企业"}]',
						companyType: 256,
						companyTypeText: '[{"ComType":256,"ComTypeText":"上游销售区域"}]',
						provinceId: 430000,
						provinceName: '湖南省',
						cityId: 430100,
						cityName: '长沙市',
						haidianCode: null,
						creditCode: '66666666666666',
						mainBusiness: '112-主营',
						introduction: null,
						registerAddress: '湖南长沙芙蓉区'
					},
					{
						id: 49,
						companyCode: 'ET000482',
						companyName: 'π-生产企业',
						state: 1,
						companyRoleType: 2,
						companyRoleTypeText: '[{"RoleType":2,"RoleTypeText":"上游企业"}]',
						companyType: 16,
						companyTypeText: '[{"ComType":16,"ComTypeText":"受托生产企业"}]',
						provinceId: 370000,
						provinceName: '山东省',
						cityId: 370100,
						cityName: '济南市',
						haidianCode: null,
						creditCode: 'π-生产企业-统一社会信用代码',
						mainBusiness: 'π-生产企业-主营业务',
						introduction: 'π-生产企业-公司简介',
						registerAddress: 'π-生产企业-注册地址'
					}
				],
				item2: 30
			})
		}, 1000)
	})
}
</script>

<style lang="scss">
.scrollbar-wrapper {
	height: calc(100% - 60px);
}
.layout-container-demo .el-header {
	position: relative;
	background-color: var(--el-color-primary-light-7);
}
.layout-container-demo .el-aside {
	background: var(--el-color-primary-light-8);
}
.layout-container-demo .el-menu {
	border-right: none;
}
.layout-container-demo .el-main {
	padding: 0;
}
.layout-container-demo .el-footer {
	background: #366695;
}
</style>
