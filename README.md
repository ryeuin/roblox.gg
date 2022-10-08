<p  align="center">
<img  src="https://github.com/ryeuin/roblox.gg/blob/main/roblox.gg.round.png?raw=true"  alt="Logo"  width="140">

<h3  align="center">roblox.gg</h3>

<p  align="center">
Lightweight ROBLOX api wrapper
<br />
<p align="center">
<a  href="gg.ryeuin.ml"><strong>Explore the docs »</strong></a>
<p align="center"><a  href="https://yarnpkg.com/package/roblox.gg">View on Yarn</a> · <a  href="https://npmjs.org/package/roblox.gg">View on NPM</a> · <a  href="https://github.com/ryeuin/roblox.gg">Github</a></a></p>

</p>
</p>

</p>

## About

```mermaid
graph LR
A[Request] -- X-CSRF-Token --> B((Roblox API))
B --> D{You}
```

Roblox.gg is a lightweight NPM package with support for **common js**, **module js**, and **typescript**.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" width="35" align="center"></img>  <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" width="35" align="center"></img>

<!-- GETTING STARTED -->

## Getting Started

- npm:

```bash
npm i roblox.gg
```

- yarn

```bash
yarn add roblox.gg
```

## Usage

```javascript
const { GetAvatar } = require("roblox.gg");
GetAvatar({ username: "ryeuin" }).then((x) => console.log(x));
```
