# lines-count
Calculate lines count in all files in specified directories

## Installation

As the global script:

```sh
sudo npm i -g lines-count
```

As a library:

```sh
npm i lines-count
```

## Using

Command:

```sh
lines-count [dir1] [dir2]
```

Library:

```ts
import linesCount from 'lines-count';

console.log(linesCount('src', 'scripts'));
```

## Example

Calculate lines count of all files in current directory:

```sh
lines-count
```

Calculate lines count of all files in specified directories:

```sh
lines-count src scripts
```