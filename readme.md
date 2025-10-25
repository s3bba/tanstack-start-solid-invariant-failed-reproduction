## Invariant failed on redirect error reproduction

Application has two routes `/` and `/about`

`/` route has a server function that is called in the component and redirects you to `/about`

If you go to `/about` route and click the link that takes you to `/` route, redirect will work fine and take you back to `/about`

If you go strait to the the `/` from browser url your application will chrash with this error:

```
file:///home/sebba/work/builds/tanstack-start-solid-invariant-failed-reproduction/node_modules/tiny-invariant/dist/esm/tiny-invariant.js:12
    throw new Error(value);
          ^

Error: Invariant failed: Could not find match for matchId "/". Please file an issue!
    at invariant (file:///home/sebba/work/builds/tanstack-start-solid-invariant-failed-reproduction/node_modules/tiny-invariant/dist/esm/tiny-invariant.js:12:11)
    at Object.s (/home/sebba/work/builds/tanstack-start-solid-invariant-failed-reproduction/node_modules/@tanstack/solid-router/src/Match.tsx:28:7)
    at state (/home/sebba/work/builds/tanstack-start-solid-invariant-failed-reproduction/node_modules/@tanstack/solid-router/src/useRouterState.tsx:32:35)
    at eval (/home/sebba/work/builds/tanstack-start-solid-invariant-failed-reproduction/node_modules/@tanstack/solid-store/src/index.tsx:30:22)
    at file:///home/sebba/work/builds/tanstack-start-solid-invariant-failed-reproduction/node_modules/@tanstack/store/dist/esm/scheduler.js:35:19
    at Set.forEach (<anonymous>)
    at __notifyListeners (file:///home/sebba/work/builds/tanstack-start-solid-invariant-failed-reproduction/node_modules/@tanstack/store/dist/esm/scheduler.js:34:19)
    at __flush (file:///home/sebba/work/builds/tanstack-start-solid-invariant-failed-reproduction/node_modules/@tanstack/store/dist/esm/scheduler.js:64:9)
    at batch (file:///home/sebba/work/builds/tanstack-start-solid-invariant-failed-reproduction/node_modules/@tanstack/store/dist/esm/scheduler.js:95:9)
    at file:///home/sebba/work/builds/tanstack-start-solid-invariant-failed-reproduction/node_modules/@tanstack/router-core/dist/esm/router.js:629:19
    at RouterCore.startViewTransition (file:///home/sebba/work/builds/tanstack-start-solid-invariant-failed-reproduction/node_modules/@tanstack/router-core/dist/esm/router.js:740:9)
    at Object.onReady (file:///home/sebba/work/builds/tanstack-start-solid-invariant-failed-reproduction/node_modules/@tanstack/router-core/dist/esm/router.js:625:22)
    at triggerOnReady (file:///home/sebba/work/builds/tanstack-start-solid-invariant-failed-reproduction/node_modules/@tanstack/router-core/dist/esm/load-matches.js:10:27)
    at loadMatches (file:///home/sebba/work/builds/tanstack-start-solid-invariant-failed-reproduction/node_modules/@tanstack/router-core/dist/esm/load-matches.js:568:26)
    at async file:///home/sebba/work/builds/tanstack-start-solid-invariant-failed-reproduction/node_modules/@tanstack/router-core/dist/esm/router.js:617:13

Node.js v22.21.0
error: script "dev" exited with code 1
```
