import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchKnowledgeComponent } from './fetch-knowledge.component';

describe('FetchKnowledgeComponent', () => {
  let component: FetchKnowledgeComponent;
  let fixture: ComponentFixture<FetchKnowledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchKnowledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
