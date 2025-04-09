import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'digital-department-application';

  greeting="";

  ngOnInit(): void {
      console.log("Hello МИР!")
  }

  onSayHi():void{
    alert("Привет, "+ this.greeting);
  }
}
