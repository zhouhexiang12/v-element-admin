const Mock = require('mockjs');

function mockReq(methods) {
  let result = null;
  switch (methods) {
    case 'findByPage':
      result = Mock.mock({
        code: '0',
        message: '查询成功',
        total: 30,
        totalPage: 1,
        'datas|6': [
          {
            'fid|+1': 1,
            fcode: '单号',
            'demandCompanyId|+1': 2,
            'applyDeptId|1': [1, 2, 3, 4, 5],
            applyDeptName: '部门名称',
            'applyUserId|1': [1, 2, 3, 4, 5],
            applyUserName: '申请人',
            'isEmergency|1': [1, 0],
            project: '项目',
            'projectId|1': [1, 2, 3, 4, 5],
            applyDate: '2018-12-12',
            'state|1': [1, 2, 3],
            stateView: '单据状态中文展示',
            'createUserId|1': [1, 2, 3, 4, 5],
            entryUserName: '录入人',
            entryDate: '2018-12-12',
            fdesc: '备注'
          }
        ]
      });
      break;
    case 'insert':
      result = {
        code: '0',
        message: '操作成功'
      };
      break;
    case 'getApplyByFid':
      result = Mock.mock({
        code: '0',
        message: '查询成功',
        total: 10,
        totalPage: 10,
        datas: {
          fid: 1,
          fcode: 'No20190217001',
          applyDate: '2019-07-22',
          applyUserId: 1,
          applyDeptId: 0,
          projectId: '项目',
          state: 1,
          fdesc: 'fid给的1',
          isEmergency: 1,
          isWorkFlow: 1,
          applySubs: [
            {
              materialId: 1,
              supplierId: '供应商',
              materialCode: '1code**',
              materialName: '物资名称',
              specificationModel: 'GE45621',
              measureUnitId: '1**',
              unitPrice: '100.50',
              number: 100,
              existNum: 90,
              actualNumber: 22,
              rate: 0.17,
              amount: '10050.00',
              orderDate: '2019-07-22'
            },
            {
              materialId: 2,
              supplierId: '供应商2',
              materialName: '物资名称2',
              specificationModel: 'GE45622',
              measureUnitId: '2**',
              unitPrice: '200.50',
              number: 200,
              existNum: 180,
              actualNumber: 22,
              rate: 0.17,
              amount: '20050.00',
              orderDate: '2019-07-23',
              adviceSupplier: '2合肥市**厂商',
              inventoryQuantity: 200, // 库存数量
              availability: 200 // 可用量
            }
          ]
        }
      });
      break;
    case 'delete':
      result = {
        code: '0',
        message: '删除成功'
      };
      break;
    case 'submitWithdrawal':
      result = {
        code: '0',
        message: '提交/撤回'
      };
      break;
    case 'approvalAbandoningTrial':
      result = {
        code: '0',
        message: '审批/弃审'
      };
      break;
  }
  return result;
}

module.exports = mockReq;
