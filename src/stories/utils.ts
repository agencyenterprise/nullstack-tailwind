import client from 'nullstack/client/client';
import page from 'nullstack/client/page';
import render from 'nullstack/client/render';
import router from 'nullstack/client/router';
import generateTree from 'nullstack/shared/generateTree';

export function renderComponent<T>(component: T) {
  const wrapper = document.createElement('div');

  const scope = client;

  scope.context = {
    page: page,
    router: router,
    settings: {},
    worker: {},
    params: {},
    project: {},
    environment: {},
  };

  generateTree(component, scope).then((tree: unknown) => {
    const el = render(tree);
    wrapper.appendChild(el);
  });

  return wrapper;
}
