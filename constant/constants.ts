import { Identity, InterestingRegionOrCountry } from 'src/kysely/types';

export const identityToRegionMap: Record<
  Identity,
  InterestingRegionOrCountry[]
> = {
  台北人: ['台北市'],
  新北人: ['新北市'],
  桃園人: ['桃園市'],
  台中人: ['台中市'],
  台南人: ['台南市'],
  高雄人: ['高雄市'],
  基隆人: ['基隆市'],
  新竹人: ['新竹市', '新竹縣'],
  嘉義人: ['嘉義市', '嘉義縣'],
  宜蘭人: ['宜蘭縣'],
  花蓮人: ['花蓮縣'],
  台東人: ['台東縣'],
  南投人: ['南投縣'],
  彰化人: ['彰化縣'],
  雲林人: ['雲林縣'],
  屏東人: ['屏東縣'],
  苗栗人: ['苗栗縣'],
  澎湖人: ['澎湖縣'],
  金門人: ['金門縣'],
  連江人: ['連江縣'],
  其他: ['台灣'], // fallback
};

export const MisreadMedia = ['TFCNews', 'MyGoPenNews', 'FactcheckLab'];
