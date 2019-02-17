import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  formGroup: FormGroup;
  constructor(
    private formBulid: FormBuilder
    ) { 
    // ของที่ประกาศ Constructor จะใช้ได้ในตัวมันเอง
  
  
}
   ngOnInit() {
    // 
    this.formGroup = this.formBulid.group(
      {
        firstName : this.formBulid.control(''), 
        lastName: ['']
        // 2 บรรทัด พิมพ์แบบไหนก็ได้แบบสั้นแบบยาว
      } )
    
  }
  Onsubmit(form:FormGroup){
    console.log(form);
  }

}
