import { default as dayjs } from "dayjs";

export const format = {
	todayDate: () => dayjs().format("YYYY-MM-DD"),
	humanDate: (value: string) => dayjs(value).format("MMMM D, YYYY"),
	humanDateExcel: (value: string) => dayjs(value).format("MMMM D YYYY"),
	humanDateTime: (value: string) => dayjs(value).format("MMMM D, YYYY HH:mm"),
	humanDateTimeExcel: (value: string) =>
		dayjs(value).format("MMMM D YYYY HH:mm"),
	dateMonthYear: (value: string) => dayjs(value).format("MM / YYYY"),
	exportHumanDateTime: (value: string) =>
		dayjs(value).format("YYYY-MM-DD HH:mm"),
	exportDateMonthYear: (value: string) => dayjs(value).format("MM/YYYY"),

	currenyWithAmount: (value: number) =>
		value.toLocaleString("RWF", {
			style: "currency",
			currency: "RWF",
		}),

	capitalizeName: (value: string) => {
		const result: string[] = [];

		value
			.split(" ")
			.forEach((element) =>
				result.push(element.charAt(0).toUpperCase() + element.slice(1))
			);

		return result.join(" ");
	},
};

export const convertStringToArray = (input: string) => {
	const stringArray = input.split(",");
	const arrayOfObjects = stringArray.map((name) => ({ name }));
	return arrayOfObjects;
};
export const convertArrayToString = (arrayOfObjects: any[]) => {
	const stringArray = arrayOfObjects.map((obj) => obj.name);
	const joinedString = stringArray.join(",");
	return joinedString;
};

export function FormatSelectOptions(arr: any[]) {
	const result = arr.map((item) => ({
		value: item.id,
		text: item.title,
	}));
	return result;
}

export function FormatTicketTypeSelectOptions(arr: any[]) {
	const result = arr.map((item) => ({
		value: item.id,
		text: item.type,
	}));
	return result;
}
