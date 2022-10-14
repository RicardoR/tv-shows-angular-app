import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

import { TvShowSearchComponent } from './tv-show-search.component';

describe('TvShowSearchComponent', () => {
  let component: TvShowSearchComponent;
  let fixture: ComponentFixture<TvShowSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TvShowSearchComponent ],
      providers: [FormBuilder],
    })
    .overrideTemplate(TvShowSearchComponent, '');

    fixture = TestBed.createComponent(TvShowSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init the formControl', () => {
    expect(component.form.controls['searchTvShow']).toBeDefined();
  });

  it('writeValue should register the value', () => {
    const showToSearch = { searchTvShow: 'Superman' };

    component.value = '';
    component.form.patchValue(showToSearch);
    component.writeValue();
    expect(component.value).toBe(showToSearch.searchTvShow);
  });

  it('registerOnChange should set the onchange', () => {
    const onChangeFn = () => {
      return 'test'
    };
    component.registerOnChange(onChangeFn);
    expect(component.onChange).toEqual(onChangeFn);
  });

  it('registerOnTouched should set the onTouched', () => {
    const onTouchedFn = () => {
      return 'test'
    };
    component.registerOnTouched(onTouchedFn);
    expect(component.onTouched).toEqual(onTouchedFn);
  });

  it('markAsTouched should mark as touched', () => {
    component.touched = false;
    component.markAsTouched();
    expect(component.touched).toBeTrue();
  });
});
