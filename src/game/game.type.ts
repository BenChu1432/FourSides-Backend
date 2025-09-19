import { TitleType } from 'src/kysely/types';

export type UnlockedTitle = {
  id: number;
  name: string;
  explanation: string;
  emoji: string;
  condition: number;
  condition_description: string;
  type: TitleType;
};
