export type Grade = "SMALL" | "POOR" | "NORMAL" | "RICH" | "INGOT";

export const GradeInfo: {
	[key in Grade]: {
		amount: number;
		stackSize: number;
	};
} = {
	SMALL: { amount: 10, stackSize: 32 },
	POOR: { amount: 15, stackSize: 16 },
	NORMAL: { amount: 25, stackSize: 16 },
	RICH: { amount: 35, stackSize: 16 },
	INGOT: { amount: 100, stackSize: 16 },
};
