/**
 * Copyright (c) William Niemiec.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './styles';
import SelectableButton from '@wniemiec-component-reactnative/selectable-button';
import { translate } from './locales';

/**
 * Component that lets you select days of the week.
 * 
 * @param   {function(number, bool): void} onPress: Function that is called 
 * when the button is pressed
 * @param		{bool} reduced: Indicates whether the days of the week should be
 * displayed in abbreviated form
 * @param   {array: int} selectedOps: Pre-selected weekdays (starting with 0)
 * @param   {string} bgColor: Background color (in hexadecimal) 
 * @param   {string} fgColor: Foreground color (in hexadecimal)
 */
export default function DaysOfWeek({ onPress, reduced, selectedOps, bgColor = "#01786F", fgColor = "#FFFFFF" }) {
	
	const [selectedOp, setSelectedOp] = useState([]);
	const dayWeek = buildDayWeekMapping(reduced);

	const handlePress = (op) => {
		const selected = !selectedOp.includes(op)

		if (selectedOp.includes(op)) {
			if (selectedOp.length == 1) {
				alert(translate('select_at_least_one'));
				return;
			}
			else {
				setSelectedOp(list => {
					let newList = [...list];
					newList = newList.filter((item, index) => item != op);
					return newList;
				})
			}
		}
		else
			setSelectedOp(list => {
				const newList = [...list];
				newList.push(op);
				return newList;
			})

		onPress(op, selected);
	}

	const WeekOption = ({weekday}) => (
		<SelectableButton
			selected={selectedOp.includes(weekday)} 
			title={dayWeek[weekday]} 
			onPress={() => handlePress(weekday)}
			fgColor={fgColor}
			bgColor={bgColor}
			size='small'
		/>
	);

	useEffect(() => {
		if (selectedOps != undefined) {
			setSelectedOp(selectedOps);
		}
	}, [])

	return (
		<View style={styles.area}>
			<WeekOption weekday={0} />
			<WeekOption weekday={1} />
			<WeekOption weekday={2} />
			<WeekOption weekday={3} />
			<WeekOption weekday={4} />
			<WeekOption weekday={5} />
			<WeekOption weekday={6} />
		</View>
	)
}

function buildDayWeekMapping(reduced) {
	if (reduced === undefined)
		reduced = false;
		
	return [
		reduced ? translate('monday') : translate('monday_abbr'),
		reduced ? translate('tuesday') : translate('tuesday_abbr'),
		reduced ? translate('wednesday') : translate('wednesday_abbr'),
		reduced ? translate('thursday') : translate('thursday_abbr'),
		reduced ? translate('friday') : translate('friday_abbr'),
		reduced ? translate('saturday') : translate('saturday_abbr'),
		reduced ? translate('sunday') : translate('sunday_abbr'),
	];
}
