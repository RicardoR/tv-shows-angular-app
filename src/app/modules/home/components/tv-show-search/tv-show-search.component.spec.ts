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
    expect(component.val).toBeDefined();
  });

  it('writeValue should register the value', () => {
    component.val = '';
    component.value = 'Superman'
    expect(component.val).toBe('Superman');
  });

  it('registerOnChange should set the onchange', () => {
    const onChangeFn = () => {
      return 'test'
    };
    component.registerOnChange(onChangeFn);
    expect(component.onChange).toEqual(onChangeFn);
  });
});
