<div align="center">
    بسم الله الرحمن الرحيم
</div>

<div align="left">

# AlpineJS Delayed Magic
An [AlpineJS](https://alpinejs.dev/) **plugin** to enhance it with cumulative timed-out callbacks to be executed.

It's very useful when it comes to **front-end development** where one might forget how many `setTimeout()`s were performed prior and account for that timing difference. And with this package, you've no-brainer mode enabled! Just `$delay(() => console.log('your callback'), 1000)` and it would respect all the parent elements' `$delay()` calls as well as `x-delay` attributes (that hold time only - **all in milliseconds**) and basically adding those delays to the 1 second that we have, for our example...


## Installation

1. Use your favorite package manager to install the dependency in your [TALL](https://tallstack.dev) project:

   ```bash
   bun add @vpremiss/alpine-delyed-magic
   ```

2. Then initialize the Alpine plugin in your flow JS like this:

   ```js
   // import { Livewire, Alpine } from '../../../vendor/livewire/livewire/dist/livewire.esm';
   import delayedMagic from '@vpremiss/alpine-delayed-magic';

   Alpine.plugin(delayedMagic);

   // Alpine.start();
   ```

   - Remember that you need the custom Alpine/Livewire [setup](https://livewire.laravel.com/docs/installation#manually-bundling-livewire-and-alpine) in order to add plugins and such...


## Usage

- (Optional): You can add `x-delay` attributes with milliseconds within them on elements.

- Use `$delay()` helper to pass a callback and also a time in milliseconds and let us delay the magical effects for you! 

  ```html
  <div x-init="() => $delay(() => console.log('after 500ms'), 500);">
      <div x-init="() => $delay(() => console.log('after 1500ms'), 1000);"></div>

      <div x-init="() => $delay(() => console.log('after 2500ms'), 2000);">
          <div x-delay="1000">
              <div
                  x-delay="500"
                  x-init="() => $delay(() => console.log('after 4500ms'), 500);"
              ></div>

              <div x-init="() => $delay(() => console.log('after 2500ms'));"></div>
          </div>
      </div>
  </div>
  ```

  ![2024-06-12_03-40](https://github.com/VPremiss/PACKAGE_ALPINEJS_delayed-magic/assets/121377476/cb771694-7409-4e27-8177-75de37589454)


## Support

Support ongoing package maintenance as well as the development of **other projects** through [sponsorship](https://github.com/sponsors/VPremiss) or one-time [donations](https://github.com/sponsors/VPremiss?frequency=one-time&sponsor=VPremiss) if you prefer.

And may Allah accept your strive; aameen.

### License

This package is open-sourced software licensed under the [MIT license](LICENSE.md).

### Credits

- [ChatGPT](https://chat.openai.com)
- [Graphite](https://graphite.dev)
- [AlpineJS](https://alpinejs.dev)
- [The Contributors](../../contributors)
- All the [frontend packages](./package.json#24) and services this package relies on...
- And the generous individuals that we've learned from and been supported by throughout our journey...


</div>

<div align="center">
   <br>والحمد لله رب العالمين
</div>
