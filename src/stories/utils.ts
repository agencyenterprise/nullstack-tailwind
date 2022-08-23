import client from 'nullstack/client/client';
import environment from 'nullstack/client/environment';
import render from 'nullstack/client/render';
import generateTree from 'nullstack/shared/generateTree';

export function renderComponent<T>(component: T) {
  const source = client;

  const wrapper = document.createElement('div');

  source.initializer = () => component;
  source.context.environment = environment;
  source.hydrationQueue = Object.values(source.instances);

  generateTree(component, source).then((tree: unknown) => {
    source.virtualDom = tree;
    source.selector = render(source.virtualDom);

    source.processLifecycleQueues().then(() => {
      setTimeout(() => {
        if (wrapper) {
          wrapper.appendChild(source.selector);
        }
      }, 50);
    });
  });

  return wrapper;
}
