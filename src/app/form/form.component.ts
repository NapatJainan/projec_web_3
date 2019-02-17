import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';
import { from } from 'rxjs';

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
        lastName: [''],
        Email: this.formBulid.control(''),
        Age : ['']
        // 2 บรรทัด พิมพ์แบบไหนก็ได้แบบสั้นแบบยาว
      } )
    
  }
  Onsubmit(form:FormGroup){
    
    const {firstName, lastName,Email,Age} = form.value;
    console.log(firstName,lastName,Email,Age);
    const user = new User(firstName,lastName,Email,Age);
    console.log(user);
  }

}
