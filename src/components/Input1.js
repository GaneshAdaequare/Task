
// import { useState } from "react"
// // import {formData} from "../data/formData"

// function Input({obj,edit,change}) {

//   let v = ''
//   if(edit !== null) {
//     v = edit[obj.name]
//   }

//   const [val, setVal] = useState(v)

// // const changehandler = (e) => {
// //   let index = formData.findIndex((x)=>x.name===e.target.name)
// //   formData[index].value = e.target.value
// // }
//   change(val, obj);

//   return (
//     <div>
//         <div className="mb-3">
//             <label htmlFor={obj.name} className="form-label">
//               {obj.label}:
//             </label>
//             <input type={obj.type} value={val} className="form-control" id={obj.id} placeholder={obj.placeholder} name={obj.name} onChange={(e)=>{setVal(e.target.value);}}/>
//               {obj.error && <span>{obj.errorMessage}</span>}
//           </div>
//     </div>
//   )
// }

// export default Input;
