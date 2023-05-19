// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { getTable } from "../../gettable";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  const players = await getTable("Players");
  const randomPlayer =
    players[Math.round((players.length - 1) * Math.random())];
  const { playerName, playerClass } = randomPlayer;
  const items = await getTable(playerClass);
  const randomItem = items[Math.round((items.length - 1) * Math.random())];
  if (!randomItem) res.status(500).send(`No table for class ${playerClass}`);
  res
    .status(200)
    .send(
      `Wild Magic - ${randomItem.description.replaceAll(
        "{player}",
        playerName
      )}`
    );
}
