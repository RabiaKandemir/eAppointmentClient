import Swal from 'sweetalert2'

import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }

  callToast(title:string,icon:SweetAlertIcon="success"){
    Swal.fire(
      {
        title:title,
        timer:3000,
        icon:icon,
        position:"bottom-right",
        showConfirmButton:false,
        showCancelButton:false,
        showCloseButton:false,
        toast:true
      }
    )
  }
  callSwal(title:string,text:string,callBack:()=>void){
    Swal.fire(
      {
        title:title,
        text:text,
        showConfirmButton:true,
        confirmButtonText:"Delete",
        showCancelButton:true,
        cancelButtonText:"Cancel",
        icon:'question'
      }
    ).then(res=>{
      if(res.isConfirmed){
callBack();
      }
    })
  }
  
}


  export type SweetAlertIcon = 'success' | 'error' | 'warning' | 'info' | 'question'