export const CREATER_USER='CREATER_USER';
export function CreateUser(values){
  console.log("Action" , values)
    return {
      type:CREATER_USER,
      payload:values
    }

}
