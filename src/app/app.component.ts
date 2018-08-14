import { Component, OnInit} from '@angular/core'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent implements OnInit {
  title = 'Angular 6 Reactive Form Validation';
  registerForm: FormGroup;
  submitted = false;
  public countrys = [
      { "id" : 1, "name" : "India" },
      { "id" : 2, "name" : "Pakistan"},
      { "id" : 3, "name" : "Australia"}
  ];

  public departments = [
    { "id" : 1, "name" : "IT" },
    { "id" : 2, "name" : "EIT"},
    { "id" : 3, "name" : "Design"}
];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['', Validators.required],
          lastName: ['', Validators.required],
          gender: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          country: ['', Validators.required],
          department: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
          tc: ['', Validators.requiredTrue],
      });
  }

  // convenience getter for easy access to form fields
  get f() { 
    console.log(this.registerForm.controls);
    
    return this.registerForm.controls; 
  }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}