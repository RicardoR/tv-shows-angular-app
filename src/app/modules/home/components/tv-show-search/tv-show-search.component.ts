import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-tv-show-search',
  templateUrl: './tv-show-search.component.html',
  styleUrls: ['./tv-show-search.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TvShowSearchComponent
    }
  ]
})
export class TvShowSearchComponent implements OnInit, ControlValueAccessor {

  @Input() value: string;

  form: FormGroup;
  touched = false;

  constructor(private formBuilder: FormBuilder) {}

  onChange = ({}) => {};

  onTouched = () => {};

  ngOnInit(): void {
    this.initControl();
  }

  writeValue(): void {
    this.value = this.form.controls['searchTvShow'].value;
    this.onChange(this.value);
    this.onTouched();
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  private initControl(): void {
    this.form = this.formBuilder.group({
      searchTvShow: this.formBuilder.control(this.value)
    });
  }
}
