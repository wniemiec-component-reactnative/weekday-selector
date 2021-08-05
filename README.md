![](https://github.com/wniemiec-components-reactnative/weekday-selector/blob/master/docs/img/logo/logo.jpg)

<h1 align='center'>Weekday selector</h1>
<p align='center'>Component that lets you select days of the week.</p>
<p align="center">
	<a href="https://github.com/wniemiec-components-reactnative/weekday-selector/actions/workflows/windows.yml"><img src="https://github.com/wniemiec-components-reactnative/weekday-selector/actions/workflows/windows.yml/badge.svg" alt=""></a>
	<a href="https://github.com/wniemiec-components-reactnative/weekday-selector/actions/workflows/macos.yml"><img src="https://github.com/wniemiec-components-reactnative/weekday-selector/actions/workflows/macos.yml/badge.svg" alt=""></a>
	<a href="https://github.com/wniemiec-components-reactnative/weekday-selector/actions/workflows/ubuntu.yml"><img src="https://github.com/wniemiec-components-reactnative/weekday-selector/actions/workflows/ubuntu.yml/badge.svg" alt=""></a>
	<a href="https://reactnative.dev/"><img src="https://img.shields.io/badge/React Native-0.60+-D0008F.svg" alt="React Native compatibility"></a>
	<a href="https://github.com/wniemiec-components-reactnative/weekday-selector/releases"><img src="https://img.shields.io/github/v/release/wniemiec-components-reactnative/weekday-selector" alt="Release"></a>
	<a href="https://github.com/wniemiec-components-reactnative/weekday-selector/blob/master/LICENSE"><img src="https://img.shields.io/github/license/wniemiec-components-reactnative/weekday-selector" alt="License"></a>
</p>
<hr />

## ❇ Introduction
React Native component that lets you select days of the week.

## 🖼 Gallery

![img1](https://github.com/williamniemiec/nForum/blob/master/docs/img/img1.png)

![img2](https://github.com/williamniemiec/nForum/blob/master/docs/img/img2.png)

![img3](https://github.com/williamniemiec/nForum/blob/master/docs/img/img3.png)

## ❓ How to use
1. Install the component
```
$ npm install --save @wniemiec.component.reactnative/weekday-selector
```

2. Import the component
```
import WeekdaySelector from '@wniemiec.component.reactnative/weekday-selector';
```

3. Use it
```
[...]
function handleWeekDay(weekday, selected) {
  if (selected)
    alert('You selected: ' + weekday);
  else
    alert('You deselected: ' + weekday);
}

<WeekdaySelector 
  onPress={handleWeekDay}
/>
[...]
```

## 📖 Documentation
|        Property        |Type|Description|Default|
|----------------|-------------------------------|-----------------------------|--------|
|onPress |`function(number, bool): void`|Function that is called when a weekday is selected|`null`|
|reduced |`bool`|Indicates whether the days of the week should be displayed in abbreviated form |`false`|
|selectedOps |`array: number`|Pre-selected weekdays |`[]`|
|bgColor |`string`|Background color (in hexadecimal)  |`#01786F`|
|fgColor |`string`|Foreground color (in hexadecimal)  |`#FFFFFF`|

## 🚩 Changelog
Details about each version are documented in the [releases section](https://github.com/williamniemiec/nForum/releases).

## 🤝 Contribute!
See the documentation on how you can contribute to the project [here](https://github.com/wniemiec-components-reactnative/weekday-selector/blob/master/CONTRIBUTING.md).

## 📁 Files

### /
|        Name        |Type|Description|
|----------------|-------------------------------|-----------------------------|
|dist |`Directory`|Released versions|
|docs |`Directory`|Documentation files|
|src     |`Directory`| Source files|
