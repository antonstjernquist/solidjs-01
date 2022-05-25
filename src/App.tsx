import {
  Component,
  createResource,
  createSignal,
  For,
  Show,
  Suspense,
} from 'solid-js';

import styles from './App.module.css';
import Project from './Components/Project';

export interface IProject {
  id: string;
  name: string;
  description: string;
  created_at: string;
}

const App: Component = () => {
  const [projects] = createResource<IProject[]>(async () => {
    const res = await fetch('https://flagga.io/v1/api/projects', {
      headers: {
        Authorization: 'Bearer TjenaMittbena123',
      },
    });
    return await res.json();
  });

  return (
    <div class={styles.App}>
      <h1>Basic overview for Flagga.io</h1>

      <section class={styles.section}>
        <h2 class={styles.sectionHeading}>Projects</h2>
        <ul>
          <Suspense fallback={'Fetching projects .. '}>
            <Show when={projects()}>
              <For each={projects()}>
                {project => <Project project={project} />}
              </For>
            </Show>
          </Suspense>
        </ul>
      </section>

      <section class={styles.section}>
        <h2 class={styles.sectionHeading}>Projects</h2>
        <ul>
          <Suspense fallback={'Fetching projects .. '}>
            <Show when={projects()}>
              <For each={projects()}>
                {project => <Project project={project} />}
              </For>
            </Show>
          </Suspense>
        </ul>
      </section>
    </div>
  );
};

export default App;
