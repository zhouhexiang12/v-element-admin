const Mock = require('mockjs');

function mockReq(methods) {
  let result = null;
  switch (methods) {
    case 'tokens':
      result = Mock.mock({
        code: '0',
        message: 'token查询成功',
        'data': {
          token: 'admin-token'
          // admin: {
          //   token: 'admin-token'
          // },
          // editor: {
          //   token: 'editor-token'
          // }
        }
      });
      break;
    case 'users':
      result = Mock.mock({
        code: '0',
        message: 'token查询成功',
        'data': {
          'admin-token': {
            roles: ['admin'],
            introduction: 'I am a super administrator',
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            name: 'Super Admin'
          },
          'editor-token': {
            roles: ['editor'],
            introduction: 'I am an editor',
            avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            name: 'Normal Editor'
          }
        }
      });
      break;
    case 'logout':
      result = {
        code: '0',
        message: '注销登陆'
      };
      break;
    case 'getApplyByFid':
      result = Mock.mock({
        code: '0',
        message: '查询成功',
        total: 10,
        totalPage: 10,
        data: {
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
