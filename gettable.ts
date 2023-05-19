import PublicGoogleSheetsParser from "public-google-sheets-parser";

const spreadsheetId = "1CQzaKzVR9bRL5txgDR_6paysd6_xAkGe1VM_arFZ4Uo";

// 1. You can pass spreadsheetId when parser instantiation

export const getTable = async (table: string) => {
  const parser = new PublicGoogleSheetsParser(spreadsheetId, table);
  return await parser.parse();
};
