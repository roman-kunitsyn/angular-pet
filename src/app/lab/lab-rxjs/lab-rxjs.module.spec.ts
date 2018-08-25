import { LabRxjsModule } from './lab-rxjs.module';

describe('LabRxjsModule', () => {
  let labRxjsModule: LabRxjsModule;

  beforeEach(() => {
    labRxjsModule = new LabRxjsModule();
  });

  it('should create an instance', () => {
    expect(labRxjsModule).toBeTruthy();
  });
});
