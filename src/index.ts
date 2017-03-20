import App from './main';
import { ComponentManager } from '@glimmer/component';

const app = new App();

app.registerInitializer({
  initialize(registry) {
    registry.register(`component-manager:/${app.rootName}/component-managers/main`, ComponentManager)
  }
});

app.boot();

window['rerender'] = app.rerender = function() {
  app.env.begin();
  app['_renderResult'].value.rerender();
  app.env.commit();
}
