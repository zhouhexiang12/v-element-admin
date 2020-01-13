import { initModule } from '@/http/serve';
import instance from '@/http/serve';

const prefix = '/login/';
// const prefix = '/materia/demandApply/';
const requestArr = {
  get: [
    'tokens', /*  查询需求申请列表 */
    'users', /* 查询需求申请的相关信息（用于修改时展示) */
    'logout'
  ],
  post: [
    'insert', /* 新增修改需求申请(新增fid为0) */
    'submitWithdrawal', /* 提交/撤回 */
    'approvalAbandoningTrial', /* 审批/弃审 */
  ],
  // deletes:[
  //   'delete'
  // ]
};
// export default initModule(prefix, requestArr);

const obj = initModule(prefix, requestArr);
obj.delete = function(arr) {
  console.log(`${prefix}delete`, arr);
  return instance.delete(`${prefix}delete`, {
    data: arr
  });
};

export default obj;
