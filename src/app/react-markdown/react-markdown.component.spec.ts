import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactMarkdownComponent } from './react-markdown.component';

describe('ReactMarkdownComponent', () => {
  let component: ReactMarkdownComponent;
  let fixture: ComponentFixture<ReactMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactMarkdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
