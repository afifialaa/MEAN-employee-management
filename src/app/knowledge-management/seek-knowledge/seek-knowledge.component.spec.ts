import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekKnowledgeComponent } from './seek-knowledge.component';

describe('SeekKnowledgeComponent', () => {
  let component: SeekKnowledgeComponent;
  let fixture: ComponentFixture<SeekKnowledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekKnowledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
