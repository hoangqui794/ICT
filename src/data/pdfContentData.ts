export interface PdfPageContent {
  pageNumber: number;
  imageUrl: string;
  textEn: string;
}

export interface PdfDocumentContent {
  fileName: string;
  slug: string;
  totalPages: number;
  pages: PdfPageContent[];
}

export const PDF_CONTENT_DATA: Record<string, PdfDocumentContent> = {
  "Discount__Premium.pdf": {
    "fileName": "Discount__Premium.pdf",
    "slug": "discount__premium",
    "totalPages": 8,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/discount__premium/page_1.png",
        "textEn": "DISCOUNT & PREMIUM"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/discount__premium/page_2.png",
        "textEn": "Discount & Premium\n1\nRange High & Low\n2\nDiscount & Premium\n3\nWhy?\n4\nPremium PD Array\n5\nDiscount PD Array"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/discount__premium/page_3.png",
        "textEn": "1\nRange High & Low\nDiscount and premium is based off the \nrange high to the range low.\nAn easy way to view a range is to look for \nwhere sell side and buyside liquidity is \nresting. \nLiquidity PDF\n \nBuyside Liquidity  \nSellside Liquidity"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/discount__premium/page_4.png",
        "textEn": "2\nDiscount & Premium\nA Gann Box or Fibonacci can be used from \nthe high to the low, marking out the middle \nof the range, or 0.5.\nThe top 50% or above the 0.5 is considered \na premium.\nThe bottom 50% or below the 0.5 is \nconsidered a discount.\n \n0.5"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/discount__premium/page_5.png",
        "textEn": "3\nWhy?\nShort positions in premium give better \nreward to risk than a short at equilibrium \n(0.5) or a short in discount. \n \n0.5\n \nRR>1\n \nRR=1\n \nRR<1\n \nPremium \nEquilibrium\nDiscount\nShort\n \nEntry: \n0.5\n \nLong positions in discount give better \nreward to risk than a long at equilibrium \n(0.5) or a long in premium. \n \nRR>1\n \nRR=1\n \nRR<1\n \nLong\n \nPremium \nDiscount\nEquilibrium\nEntry:"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/discount__premium/page_6.png",
        "textEn": "4\nPremium PD Array\n0.5\n \nPremium arrays, or PD arrays in a premium \nare used to frame a short setup. \nOB"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/discount__premium/page_7.png",
        "textEn": "5\nDiscount PD Array\n0.5\n \nDiscount arrays, or PD arrays in a discount \nare used to frame a long setup. \nFVG"
      },
      {
        "pageNumber": 8,
        "imageUrl": "/pdf_assets/discount__premium/page_8.png",
        "textEn": "Resources\nDiscount & Premium Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "Important_Liquidity_Levels.pdf": {
    "fileName": "Important_Liquidity_Levels.pdf",
    "slug": "important_liquidity_levels",
    "totalPages": 10,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_1.png",
        "textEn": "IMPORTANT LIQUIDITY\nLEVELS"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_2.png",
        "textEn": "Important Liquidity\n1\nCandles \n2\nMonthly \n3\nWeekly\n4\nDaily \n5\nKillzones\n6\nSessions"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_3.png",
        "textEn": "1\nCandles\nConsolidation\nOne Side\nBoth Sides"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_4.png",
        "textEn": "2\nMonthly\nPrevious Month Low\nPrevious Month High\nWeekly Timeframe\nPrevious Month Low\nPrevious Month High\nWeekly Timeframe"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_5.png",
        "textEn": "3\nWeekly\nPrevious Weeks Low\nPrevious Weeks High\nDaily Timeframe\nPrevious Weeks Low\nPrevious Weeks High\nDaily Timeframe"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_6.png",
        "textEn": "4\nDaily\nPrevious Day Low\nPrevious Day High\n4 Hour Timeframe\nPrevious Day Low\nPrevious Day High\n4 Hour Timeframe"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_7.png",
        "textEn": "5\nKillzones\nAsia: 20:00 – 00:00\nLondon: 02:00 – 05:00\nNew York AM: 08:30 – 11:00\nNew York PM: 13:30 – 16:00\nIndices Killzones:\n20:00 – 00:00\n02:00 – 05:00\n08:30 – 11:00\n13:30 – 16:00\nEastern Standard Time (EST)"
      },
      {
        "pageNumber": 8,
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_8.png",
        "textEn": "6\nSessions\nEastern Standard Time (EST)\nAsian Session High\nAsian Session Low\nLondon Session Low\nLondon Session High"
      },
      {
        "pageNumber": 9,
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_9.png",
        "textEn": "7\nSessions\nEastern Standard Time (EST)\nAsian Session High\nAsian Session Low\nLondon Session Low\nLondon Session High"
      },
      {
        "pageNumber": 10,
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_10.png",
        "textEn": "Resources\nImportant Liquidity Levels\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "IRL-ERL.pdf": {
    "fileName": "IRL-ERL.pdf",
    "slug": "irl_erl",
    "totalPages": 11,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/irl_erl/page_1.png",
        "textEn": "INTERNAL & EXTERNAL\nRANGE LIQUIDITY"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/irl_erl/page_2.png",
        "textEn": "IRL & ERL\n1\nInternal Liquidity\n2\nExternal Liquidity\n3\nRelationship"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/irl_erl/page_3.png",
        "textEn": "1\nInternal Range Liquidity"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/irl_erl/page_4.png",
        "textEn": "2\nExternal Range Liquidity\nSellside Liquidity\nBuyside Liquidity\nExternal Range Liquidity"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/irl_erl/page_5.png",
        "textEn": "3\nRelationship\nExternal Range Liquidity\nInternal Range Liquidity"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/irl_erl/page_6.png",
        "textEn": "4\nExternal Range Liquidity\nInternal Range Liquidity\nRelationship"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/irl_erl/page_7.png",
        "textEn": "5\nExternal Range Liquidity\nInternal Range Liquidity\nRelationship"
      },
      {
        "pageNumber": 8,
        "imageUrl": "/pdf_assets/irl_erl/page_8.png",
        "textEn": "6\nExternal Range Liquidity\nExternal Range Liquidity\nInternal Range Liquidity\nRelationship"
      },
      {
        "pageNumber": 9,
        "imageUrl": "/pdf_assets/irl_erl/page_9.png",
        "textEn": "7\nExternal Range Liquidity\nExternal Range Liquidity\nInternal Range Liquidity\nRelationship"
      },
      {
        "pageNumber": 10,
        "imageUrl": "/pdf_assets/irl_erl/page_10.png",
        "textEn": "8\nExternal Range Liquidity\nExternal Range Liquidity\nInternal Range Liquidity\nRelationship"
      },
      {
        "pageNumber": 11,
        "imageUrl": "/pdf_assets/irl_erl/page_11.png",
        "textEn": "Resources\nInternal & External Liquidity Video \nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "Liquidity.pdf": {
    "fileName": "Liquidity.pdf",
    "slug": "liquidity",
    "totalPages": 8,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/liquidity/page_1.png",
        "textEn": "LIQUIDITY:\nBUYSIDE & SELLSIDE"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/liquidity/page_2.png",
        "textEn": "Liquidity\n1\nSwing Highs & Lows\n2\nBuyside & Sellside\n3\nTypes Of Liquidity\n4\nPrevious Day & Week\n5\nSession Highs & Lows"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/liquidity/page_3.png",
        "textEn": "1\nSwing Highs & Lows\nA Swing High is formed when there is a high \nwith a lower high to the left and right. \nA Swing Low is formed when there is a low \nwith a higher low to the left and right."
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/liquidity/page_4.png",
        "textEn": "2\nBuyside & Sellside\nA Swing High at the top of the \nrange will have stop losses from \nshort positions (buy stops). This \nis called buyside liquidity.\nA Swing Low at the bottom of \nthe range will have stop losses \nfrom long positions (sell stops). \nThis is called sellside liquidity.\nSellside Liquidity\nBuyside Liquidity"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/liquidity/page_5.png",
        "textEn": "3\nTypes Of Liquidity\nSellside Liquidity\nBuyside Liquidity\nOld Highs & Lows are previous \nhighs and lows. \nSellside Liquidity\nBuyside Liquidity\nEqual Highs & Lows are when \nprice reaches the same price \nlevel multiple times. Appearing \nto be support and resistance.\nRelatively Equal Highs\nRelatively Equal Lows\nOld Low\nOld High"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/liquidity/page_6.png",
        "textEn": "4\nPrevious Day & Week\nPrevious Week High & Low are \nliquidity levels that can be used as \na draw on liquidity or frame a \nreversal or continuation.\nPrevious Weeks Low\nPrevious Weeks High\nM\nT\nW\nTH\nF\nPrevious Day Low\nPrevious Day High\nDaily Timeframe\n4 Hour Timeframe\nPrevious Day High & Low are \nliquidity levels that can be used as \na draw on liquidity or frame a \nreversal or continuation."
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/liquidity/page_7.png",
        "textEn": "5\nSession Highs & Lows\nAsian Session High\nAsian Session Low\nLondon Session Low\nLondon Session High\nSession Highs & Lows are \nliquidity levels that can be used as \na draw on liquidity or frame a \nreversal or continuation"
      },
      {
        "pageNumber": 8,
        "imageUrl": "/pdf_assets/liquidity/page_8.png",
        "textEn": "Resources\nLiquidity Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "Daily_Bias.pdf": {
    "fileName": "Daily_Bias.pdf",
    "slug": "daily_bias",
    "totalPages": 9,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/daily_bias/page_1.png",
        "textEn": "DAILY BIAS"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/daily_bias/page_2.png",
        "textEn": "Daily Bias\n1\nPrevious Day High & Low\n2\nPrevious Week High & Low\n3\nSwing Points\n4\nFailure To Displace\n5\nNext Day Model\nCredit to The MMXM Trader for his teachings"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/daily_bias/page_3.png",
        "textEn": "1\nPrevious Day High & Low\nPrevious Day High & Low are liquidity levels that can be used \nas a draw on liquidity or frame a reversal or continuation.\nPrevious Day High\nPrevious Day Low\nIs price more likely to reach for previous day high or previous day low? \nPrevious Day High\nPrevious Day Low\nPrevious Day High\nPrevious Day Low\nPrevious Day High\nPrevious Day Low\nReversals can be framed off PDH and PDL when there is a failure to displace.\nReversal Framed \nOff PDH\nAnticipate PDL \nAs Draw\nReversal Framed \nOff PDL\nPDH\nAnticipate PDH \nAs Draw\nAnticipate PDH \nAs Draw\nDaily Timeframe"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/daily_bias/page_4.png",
        "textEn": "2\nPrevious Day High & Low\nPrevious Day Low\nPrevious Day High\n4 Hour Timeframe\nPrevious Day Low\nPrevious Day High\n4 Hour Timeframe\nExample of Previous Day Low being used as a draw on \nliquidity and being used to frame a reversal. H4 chart is \nshown."
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/daily_bias/page_5.png",
        "textEn": "3\nPrevious Week High & Low\nPrevious Week High & Low are liquidity levels that can be used as \na draw on liquidity or frame a reversal or continuation.\nPrevious Weeks Low\nPrevious Weeks High\nM\nT\nW\nTH\nF\nPrevious Weeks Low\nPrevious Weeks High\nM\nT\nW\nTH\nF\nDaily Timeframe"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/daily_bias/page_6.png",
        "textEn": "4\nSwing Points\nSwing points in the market can be used \nas a draw on liquidity or be used to \nframe a reversal. \nAnticipate As Draw On Liquidity\nReversal Framed Off Swing Point\nDaily Timeframe"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/daily_bias/page_7.png",
        "textEn": "5\nFailure To Displace\nFailure to displace over old highs & lows can \nbe used to frame a reversal. \nReversal Framed Off Swing Point\nReversal Framed Off Swing Point\nDaily Timeframe"
      },
      {
        "pageNumber": 8,
        "imageUrl": "/pdf_assets/daily_bias/page_8.png",
        "textEn": "6\nNext Day Model\nWhen price respects a PD array or fails to \ndisplace over a swing high or low, the next \ncandle can be anticipated. \nDaily Timeframe"
      },
      {
        "pageNumber": 9,
        "imageUrl": "/pdf_assets/daily_bias/page_9.png",
        "textEn": "Resources\nDaily Bias Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "Intraday_Bias.pdf": {
    "fileName": "Intraday_Bias.pdf",
    "slug": "intraday_bias",
    "totalPages": 8,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/intraday_bias/page_1.png",
        "textEn": "INTRADAY BIAS"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/intraday_bias/page_2.png",
        "textEn": "Intraday Bias\n1\nPrevious Candle High (PCH) & Low (PCL) \n2\nSwing Points\n3\nFailure To Displace\n4\nNext Candle Model\nCredit to The MMXM Trader for his teachings"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/intraday_bias/page_3.png",
        "textEn": "1\nPrevious Candle High & Low\nPrevious Candle High & Low are liquidity levels that can be \nused as a draw on liquidity or frame a reversal or \ncontinuation.\nPCH\nPCL\nIs price more likely to reach for previous candle high or low? \nPCH\nPCL\nPCH\nPCL\nPCH\nPCL\nReversals can be framed off PCH and PCL when there is a failure to displace.\nReversal Framed \nOff PCH\nAnticipate PCL \nAs Draw\nReversal Framed \nOff PCL\nPCH\nAnticipate PCH\nAs Draw\nAnticipate PCH\nAs Draw\nH4 / H1 / M30 / M15 \nTimeframe"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/intraday_bias/page_4.png",
        "textEn": "2\nPrevious Candle High & Low\nPrevious Candle Low\nPrevious Candle High\nLower Time Frame\nPrevious Candle Low\nPrevious Candle High\nLower Time Frame\nExample of Previous Candle Low being used as a draw on \nliquidity and being used to frame a reversal. \nH4 / H1 / M30 / M15 \nTimeframe"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/intraday_bias/page_5.png",
        "textEn": "3\nSwing Points\nSwing points in the market can be used \nas a draw on liquidity or be used to \nframe a reversal. \nAnticipate As Draw On Liquidity\nReversal Framed Off Swing Point\nH4 / H1 / M30 / M15 \nTimeframe"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/intraday_bias/page_6.png",
        "textEn": "4\nFailure To Displace\nFailure to displace over old highs & lows can \nbe used to frame a reversal. \nReversal Framed Off Swing Point\nReversal Framed Off Swing Point\nH4 / H1 / M30 / M15 \nTimeframe"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/intraday_bias/page_7.png",
        "textEn": "5\nNext Candle Model\nWhen price respects a PD array or fails to \ndisplace over a swing high or low, the next \ncandle can be anticipated. \nH4 / H1 / M30 / M15 \nTimeframe"
      },
      {
        "pageNumber": 8,
        "imageUrl": "/pdf_assets/intraday_bias/page_8.png",
        "textEn": "Resources\nIntraday Bias Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "Killzones.pdf": {
    "fileName": "Killzones.pdf",
    "slug": "killzones",
    "totalPages": 5,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/killzones/page_1.png",
        "textEn": "ICT KILLZONES"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/killzones/page_2.png",
        "textEn": "ICT Killzones\n1\nKillzones \n2\nSilver Bullet Windows"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/killzones/page_3.png",
        "textEn": "1\nKillzones\nAsia: 20:00 – 00:00\nLondon: 02:00 – 05:00\nNew York AM: 07:00 – 10:00\nLondon Close: 10:00 – 12:00\nForex Killzones:\nAsia: 20:00 – 00:00\nLondon: 02:00 – 05:00\nNew York AM: 08:30 – 11:00\nNew York PM: 13:30 – 16:00\nIndices Killzones:\n20:00 – 00:00\n02:00 – 05:00\n07:00 – 10:00\n10:00 – 12:00\n20:00 – 00:00\n02:00 – 05:00\n08:30 – 11:00\n13:30 – 16:00\nEastern Standard Time (EST)"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/killzones/page_4.png",
        "textEn": "2\nSilver Bullet Windows\nLondon SB: 03:00 – 04:00\nNew York AM SB: 10:00 – 11:00\nNew York PM SB: 14:00 – 15:00\nSilver Bullet:\n20:00 – 00:00\n02:00 – 05:00\n08:30 – 11:00\n13:30 – 16:00\n03:00–04:00\n10:00–11:00\n14:00–15:00\nEastern Standard Time (EST)"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/killzones/page_5.png",
        "textEn": "Resources\nKillzones Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "Relative_Strength_ES.NQ.pdf": {
    "fileName": "Relative_Strength_ES.NQ.pdf",
    "slug": "relative_strength_es_nq",
    "totalPages": 7,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/relative_strength_es_nq/page_1.png",
        "textEn": "RELATIVE STRENGTH\nAND WEAKNESS\nS&P VS NASDAQ"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/relative_strength_es_nq/page_2.png",
        "textEn": "Relative Strength/Weakness\n1\nWhat is Relative Strength & Weakness \n2\nUsing SMT\n3\nUsing ES/NQ Chart\n4\nReversals"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/relative_strength_es_nq/page_3.png",
        "textEn": "1\nRelative Strength/Weakness\nStrength\nWeakness\nRelative Strength or Weakness is when comparing correlated \nassets, assessing which one is more bullish (strength) or \nbearish (weakness). \nES or NQ Chart"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/relative_strength_es_nq/page_4.png",
        "textEn": "2\nUsing SMT\nSMT can be used to show a divergence between correlated \nassets. This can be used to show relative strength and \nweakness. \nRelative \nStrength\nRelative \nWeakness\nES or NQ Chart"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/relative_strength_es_nq/page_5.png",
        "textEn": "3\nUsing ES/NQ Chart\nES/NQ :\nES/NQ :\nES :\nES :\nNQ :\nNQ :\nES/NQ :\nES :\nNQ :\nES/NQ :\nES :\nNQ :\nES/NQ Chart\nRelative Strength or Weakness can be determined \ncomparing ES to NQ by charting ES1! / NQ1! on Tradingview."
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/relative_strength_es_nq/page_6.png",
        "textEn": "4\nReversals\nMy Theory is reversals on ES1!/NQ1! can be used to show\nthe change in correlation and used to anticipate a reversal \non ES or NQ and/or determine relative strength. \nES/NQ Chart\nES/NQ :\nES :\nNQ :\nES/NQ :\nES :\nNQ :"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/relative_strength_es_nq/page_7.png",
        "textEn": "Resources\nRelative Strength / Weakness Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "SMT.pdf": {
    "fileName": "SMT.pdf",
    "slug": "smt",
    "totalPages": 12,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/smt/page_1.png",
        "textEn": "SMART MONEY\nTECHNIQUES\n(SMT)"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/smt/page_2.png",
        "textEn": "SMT\n1\nCorrelated Pairs – Bullish\n2\nCorrelated Pairs – Bullish SMT\n4\nCorrelated Pairs – Bearish\n5\nCorrelated Pairs – Bearish SMT\n7\nInversely Correlated Pairs\n8\nInversely Correlated Pairs SMT"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/smt/page_3.png",
        "textEn": "1\nCorrelated Pairs - Bullish\nLow\nHigher Low\nLow\nHigher Low"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/smt/page_4.png",
        "textEn": "2\nCorrelated Pairs – Bullish SMT\nLow\nLower Low\nLow\nHigher Low"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/smt/page_5.png",
        "textEn": "3\nCorrelated Pairs – Bullish SMT"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/smt/page_6.png",
        "textEn": "4\nCorrelated Pairs - Bearish\nHigh\nLower High\nHigh\nLower High"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/smt/page_7.png",
        "textEn": "5\nCorrelated Pairs – Bearish SMT\nHigh\nHigher High\nHigh\nLower High"
      },
      {
        "pageNumber": 8,
        "imageUrl": "/pdf_assets/smt/page_8.png",
        "textEn": "6\nCorrelated Pairs – Bearish SMT"
      },
      {
        "pageNumber": 9,
        "imageUrl": "/pdf_assets/smt/page_9.png",
        "textEn": "7\nInversely Correlated Pairs\nLower High\nHigh\nHigh\nHigher High\nLow\nLower Low\nLow\nHigher low"
      },
      {
        "pageNumber": 10,
        "imageUrl": "/pdf_assets/smt/page_10.png",
        "textEn": "8\nInversely Correlated Pairs SMT\nLower High\nHigh\nHigh\nHigher High\nLow\nHigher Low\nLow\nLower Low"
      },
      {
        "pageNumber": 11,
        "imageUrl": "/pdf_assets/smt/page_11.png",
        "textEn": "9\nInversely Correlated Pairs SMT"
      },
      {
        "pageNumber": 12,
        "imageUrl": "/pdf_assets/smt/page_12.png",
        "textEn": "Resources\nSMT Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "CISD.pdf": {
    "fileName": "CISD.pdf",
    "slug": "cisd",
    "totalPages": 5,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/cisd/page_1.png",
        "textEn": "CHANGE IN STATE\nOF DELIVERY\n(CISD)"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/cisd/page_2.png",
        "textEn": "CISD\n1\nCISD"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/cisd/page_3.png",
        "textEn": "1\nCISD\nCISD\nImportant Level\nCISD\nImportant Level"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/cisd/page_4.png",
        "textEn": "1\nCISD\nCISD\nImportant Level\nCISD\nImportant Level"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/cisd/page_5.png",
        "textEn": "Resources\nCISD Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "Market_Structure_Shift.pdf": {
    "fileName": "Market_Structure_Shift.pdf",
    "slug": "market_structure_shift",
    "totalPages": 6,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/market_structure_shift/page_1.png",
        "textEn": "MARKET STRUCTURE\nSHIFT"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/market_structure_shift/page_2.png",
        "textEn": "Market Structure Shift\n1\nDisplacement\n2\nMarket Structure Shift\n3\nHigher Time Frame Level"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/market_structure_shift/page_3.png",
        "textEn": "1\nDisplacement\nDisplacement is an aggressive move with \nfull-bodied candles.\nThis can form in a single candle or in \nmultiple candles. \nGenerally, displacement candle(s) have FVG \npresent."
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/market_structure_shift/page_4.png",
        "textEn": "2\nMarket Structure Shift\nWhen displacement occurs over or below a \nswing high or low, a market structure shift \nhappens.  \nHaving bodies close over/below previous structure is preferred.\nA stop raid before the MSS is preferred. \nA market structure shift (MSS) indicates a \nchange in trend from bullish to bearish or \nbearish to bullish.\nMarket Structure Shift"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/market_structure_shift/page_5.png",
        "textEn": "3\nHigher Time Frame Level\nIt is important that a higher time frame level \nis engaged prior to the lower time frame \nmarket structure shift.  \nHigher Time Frame Level"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/market_structure_shift/page_6.png",
        "textEn": "Resources\nMarket Structure Shift Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "MSS_vs_CISD.pdf": {
    "fileName": "MSS_vs_CISD.pdf",
    "slug": "mss_vs_cisd",
    "totalPages": 7,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/mss_vs_cisd/page_1.png",
        "textEn": "MSS vs CISD"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/mss_vs_cisd/page_2.png",
        "textEn": "MSS vs CISD\n1\nMarket Structure Shift\n2\nChange In State Of Delivery\n3\nComparison\n4\nInversion"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/mss_vs_cisd/page_3.png",
        "textEn": "1\nMarket Structure Shift\nMarket Structure Shift"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/mss_vs_cisd/page_4.png",
        "textEn": "2\nCISD\nCISD\nImportant Level\nCISD\nImportant Level"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/mss_vs_cisd/page_5.png",
        "textEn": "3\nComparison\nCISD\nImportant Level\nCISD\nImportant Level\nMarket Structure Shift \nMarket Structure Shift"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/mss_vs_cisd/page_6.png",
        "textEn": "Inversion\n4"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/mss_vs_cisd/page_7.png",
        "textEn": "Resources\nMSS vs CISD Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "MSS_vs_Liquidity_Grab.pdf": {
    "fileName": "MSS_vs_Liquidity_Grab.pdf",
    "slug": "mss_vs_liquidity_grab",
    "totalPages": 7,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/mss_vs_liquidity_grab/page_1.png",
        "textEn": "MSS VS LIQUIDITY GRAB"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/mss_vs_liquidity_grab/page_2.png",
        "textEn": "MSS vs Liquidity Grab\n1\nDisplacement\n2\nMarket Structure Shift\n3\nLiquidity Grab\n4\nExample"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/mss_vs_liquidity_grab/page_3.png",
        "textEn": "1\nDisplacement\nDisplacement is an aggressive move with \nfull-bodied candles.\nThis can form in a single candle or in \nmultiple candles. \nGenerally, displacement candle(s) have FVG \npresent."
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/mss_vs_liquidity_grab/page_4.png",
        "textEn": "2\nMarket Structure Shift\nWhen displacement occurs over or below a \nswing high or low, a market structure shift \noccurs.  \nHaving bodies close over/below previous structure is preferred.\nA stop raid before the MSS is preferred. \nA market structure shift (MSS) indicates a \nchange in trend from bullish to bearish or \nbearish to bullish.\nMSS PDF\nMarket Structure Shift"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/mss_vs_liquidity_grab/page_5.png",
        "textEn": "3\nLiquidity Grab\nWhen there is lack of displacement over or \nbelow a swing high or low, a liquidity grab \noccurs.\nHaving bodies fail to close over/below previous structure is preferred.\nA liquidity grab indicates a failure to \ncontinue in one direction.\nFailure to displace over previous high\nFailure to displace below previous low"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/mss_vs_liquidity_grab/page_6.png",
        "textEn": "4\nExample\nFailure To Displace\nDisplacement"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/mss_vs_liquidity_grab/page_7.png",
        "textEn": "Resources\nMSS vs Liquidity Grab Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "BreakerBlocks.pdf": {
    "fileName": "BreakerBlocks.pdf",
    "slug": "breakerblocks",
    "totalPages": 20,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/breakerblocks/page_1.png",
        "textEn": "BREAKER BLOCKS"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/breakerblocks/page_2.png",
        "textEn": "Breaker Blocks\n1\nFair Value Gaps\n2\nBreaker Blocks\n4\nUnicorn"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/breakerblocks/page_3.png",
        "textEn": "1\nBullish Breaker Block"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/breakerblocks/page_4.png",
        "textEn": "2\nBullish Breaker Block\nLow"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/breakerblocks/page_5.png",
        "textEn": "3\nBullish Breaker Block\nLow\nHigh"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/breakerblocks/page_6.png",
        "textEn": "4\nBullish Breaker Block\nLow\nHigh\nLower Low"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/breakerblocks/page_7.png",
        "textEn": "5\nBullish Breaker Block\nLow\nHigh\nLower Low\nHigher High"
      },
      {
        "pageNumber": 8,
        "imageUrl": "/pdf_assets/breakerblocks/page_8.png",
        "textEn": "6\nBullish Breaker Block\nLow\nHigh\nLower Low\nHigher High"
      },
      {
        "pageNumber": 9,
        "imageUrl": "/pdf_assets/breakerblocks/page_9.png",
        "textEn": "7\nBullish Breaker Block\nLow\nHigh\nLower Low\nHigher High"
      },
      {
        "pageNumber": 10,
        "imageUrl": "/pdf_assets/breakerblocks/page_10.png",
        "textEn": "8\nBearish Breaker Block\nHigh"
      },
      {
        "pageNumber": 11,
        "imageUrl": "/pdf_assets/breakerblocks/page_11.png",
        "textEn": "9\nBearish Breaker Block\nHigh\nLow"
      },
      {
        "pageNumber": 12,
        "imageUrl": "/pdf_assets/breakerblocks/page_12.png",
        "textEn": "10\nBearish Breaker Block\nHigh\nLow\nHigher High"
      },
      {
        "pageNumber": 13,
        "imageUrl": "/pdf_assets/breakerblocks/page_13.png",
        "textEn": "Bearish Breaker Block\nHigh\nLow\nHigher High\nLower Low\n11"
      },
      {
        "pageNumber": 14,
        "imageUrl": "/pdf_assets/breakerblocks/page_14.png",
        "textEn": "12\nBearish Breaker Block\nHigh\nLow\nHigher High\nLower Low"
      },
      {
        "pageNumber": 15,
        "imageUrl": "/pdf_assets/breakerblocks/page_15.png",
        "textEn": "13\nBearish Breaker Block\nHigh\nLow\nHigher High\nLower Low"
      },
      {
        "pageNumber": 16,
        "imageUrl": "/pdf_assets/breakerblocks/page_16.png",
        "textEn": "14\nFair Value Gaps\nBearish\nFair Value Gap\nBullish\nFair Value Gap"
      },
      {
        "pageNumber": 17,
        "imageUrl": "/pdf_assets/breakerblocks/page_17.png",
        "textEn": "15\nUnicorn Model"
      },
      {
        "pageNumber": 18,
        "imageUrl": "/pdf_assets/breakerblocks/page_18.png",
        "textEn": "16\nStop Losses"
      },
      {
        "pageNumber": 19,
        "imageUrl": "/pdf_assets/breakerblocks/page_19.png",
        "textEn": "16\nOB vs BB"
      },
      {
        "pageNumber": 20,
        "imageUrl": "/pdf_assets/breakerblocks/page_20.png",
        "textEn": "Resources\nBreaker Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "Fair_Value_Gaps.pdf": {
    "fileName": "Fair_Value_Gaps.pdf",
    "slug": "fair_value_gaps",
    "totalPages": 9,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/fair_value_gaps/page_1.png",
        "textEn": "FAIR VALUE GAPS"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/fair_value_gaps/page_2.png",
        "textEn": "Fair Value Gaps\n1\nFair Value Gaps\n2\nSIBI & BISI\n3\nVI & Opening Gap\n4\nEntries\n5\nStop Losses\n6\nInversion"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/fair_value_gaps/page_3.png",
        "textEn": "1\nFair Value Gaps\nFair value gaps (FVG) are a three-candlestick \npattern where the high/low of the candle(1) \ndoes not overlap the low/high of candle(3). \n1\n2\n3\n1\n2\n3\nThe low of candle(1) \ndoes not overlap with \nthe high of candle(3)."
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/fair_value_gaps/page_4.png",
        "textEn": "2\nSIBI & BISI\nSIBI: Sellside imbalance buyside inefficiency\nThis is a bearish FVG.\nPrice offered sellside and made an \nimbalance. This leaves buyside inefficient.\nCandle(1) low does not overlap with \nCandle(3) high. \nBISI: Buyside imbalance sellside inefficiency\nThis is a bullish FVG. \nPrice offered buyside and made an \nimbalance. This leaves sellside inefficient.\nCandle(1) high does not overlap with \nCandle(3) low. \n1\n2\n3\n1\n2\n3"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/fair_value_gaps/page_5.png",
        "textEn": "3\nVI & Opening Gap\nFair Value Gap\nOpening Gap\nVolume Imbalance"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/fair_value_gaps/page_6.png",
        "textEn": "4\nEntries\nIOFED\nFVG Fill\nConsequent Encroachment\nEntry\nEntry\n0.5\nEntry"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/fair_value_gaps/page_7.png",
        "textEn": "5\nStop Losses\nFVG End\nSwing\nOrder Block\nStop\nStop\nStop"
      },
      {
        "pageNumber": 8,
        "imageUrl": "/pdf_assets/fair_value_gaps/page_8.png",
        "textEn": "6\nInversion\nA SIBI used as support on the \nbuyside of the curve.\nA BISI used as resistance on the \nsellside of the curve."
      },
      {
        "pageNumber": 9,
        "imageUrl": "/pdf_assets/fair_value_gaps/page_9.png",
        "textEn": "Resources\nFair Value Gap Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "Inversion.pdf": {
    "fileName": "Inversion.pdf",
    "slug": "inversion",
    "totalPages": 17,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/inversion/page_1.png",
        "textEn": "INVERSION"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/inversion/page_2.png",
        "textEn": "Inversion\n1\nFair Value Gaps\n2\nInversion\n7\nConsequent Encroachment\n13\nOld SIBI / BISI"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/inversion/page_3.png",
        "textEn": "1\nFair Value Gaps"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/inversion/page_4.png",
        "textEn": "2\nInversion"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/inversion/page_5.png",
        "textEn": "3\nInversion"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/inversion/page_6.png",
        "textEn": "4\nInversion"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/inversion/page_7.png",
        "textEn": "5\nInversion"
      },
      {
        "pageNumber": 8,
        "imageUrl": "/pdf_assets/inversion/page_8.png",
        "textEn": "6\nInversion"
      },
      {
        "pageNumber": 9,
        "imageUrl": "/pdf_assets/inversion/page_9.png",
        "textEn": "7\nConsequent Encroachment\n0.5"
      },
      {
        "pageNumber": 10,
        "imageUrl": "/pdf_assets/inversion/page_10.png",
        "textEn": "8\nConsequent Encroachment\n0.5"
      },
      {
        "pageNumber": 11,
        "imageUrl": "/pdf_assets/inversion/page_11.png",
        "textEn": "9\nConsequent Encroachment\n0.5"
      },
      {
        "pageNumber": 12,
        "imageUrl": "/pdf_assets/inversion/page_12.png",
        "textEn": "10\nConsequent Encroachment\n0.5"
      },
      {
        "pageNumber": 13,
        "imageUrl": "/pdf_assets/inversion/page_13.png",
        "textEn": "Consequent Encroachment\n0.5\n11"
      },
      {
        "pageNumber": 14,
        "imageUrl": "/pdf_assets/inversion/page_14.png",
        "textEn": "Consequent Encroachment\n0.5\n12"
      },
      {
        "pageNumber": 15,
        "imageUrl": "/pdf_assets/inversion/page_15.png",
        "textEn": "Old SIBI / BISI\n13"
      },
      {
        "pageNumber": 16,
        "imageUrl": "/pdf_assets/inversion/page_16.png",
        "textEn": "Old SIBI / BISI\n14"
      },
      {
        "pageNumber": 17,
        "imageUrl": "/pdf_assets/inversion/page_17.png",
        "textEn": "Resources\nInversion Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "Mitigation_Blocks.pdf": {
    "fileName": "Mitigation_Blocks.pdf",
    "slug": "mitigation_blocks",
    "totalPages": 15,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/mitigation_blocks/page_1.png",
        "textEn": "MITIGATION BLOCKS"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/mitigation_blocks/page_2.png",
        "textEn": "Mitigation Blocks\n1\nMitigation Blocks"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/mitigation_blocks/page_3.png",
        "textEn": "1\nMitigation Blocks"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/mitigation_blocks/page_4.png",
        "textEn": "2\nMitigation Blocks"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/mitigation_blocks/page_5.png",
        "textEn": "Mitigation Blocks\n3\nHTF Level"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/mitigation_blocks/page_6.png",
        "textEn": "Mitigation Blocks\n4\nHTF Level"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/mitigation_blocks/page_7.png",
        "textEn": "Mitigation Blocks\n5\nHTF Level"
      },
      {
        "pageNumber": 8,
        "imageUrl": "/pdf_assets/mitigation_blocks/page_8.png",
        "textEn": "Mitigation Blocks\n6\nHTF Level"
      },
      {
        "pageNumber": 9,
        "imageUrl": "/pdf_assets/mitigation_blocks/page_9.png",
        "textEn": "Mitigation Blocks\n7\nHTF Level"
      },
      {
        "pageNumber": 10,
        "imageUrl": "/pdf_assets/mitigation_blocks/page_10.png",
        "textEn": "Mitigation Blocks\n8\nHTF Level"
      },
      {
        "pageNumber": 11,
        "imageUrl": "/pdf_assets/mitigation_blocks/page_11.png",
        "textEn": "Mitigation Blocks\n9\nHTF Level"
      },
      {
        "pageNumber": 12,
        "imageUrl": "/pdf_assets/mitigation_blocks/page_12.png",
        "textEn": "Mitigation Blocks\n10\nHTF Level"
      },
      {
        "pageNumber": 13,
        "imageUrl": "/pdf_assets/mitigation_blocks/page_13.png",
        "textEn": "Mitigation Blocks\n11\nHTF Level"
      },
      {
        "pageNumber": 14,
        "imageUrl": "/pdf_assets/mitigation_blocks/page_14.png",
        "textEn": "Mitigation Blocks\n12\nHTF Level"
      },
      {
        "pageNumber": 15,
        "imageUrl": "/pdf_assets/mitigation_blocks/page_15.png",
        "textEn": "Resources\nMitigation Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "Orderblocks.pdf": {
    "fileName": "Orderblocks.pdf",
    "slug": "orderblocks",
    "totalPages": 9,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/orderblocks/page_1.png",
        "textEn": "ORDERBLOCKS"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/orderblocks/page_2.png",
        "textEn": "Orderblocks\n1\nOrderblocks\n5\nMean Threshold\n6\nStop Losses"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/orderblocks/page_3.png",
        "textEn": "1\nOrderblocks\nOB\nImportant Level\nOB\nImportant Level"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/orderblocks/page_4.png",
        "textEn": "2\nOrderblocks\nOB\nOB"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/orderblocks/page_5.png",
        "textEn": "3\nOrderblocks\nOB\nFVG"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/orderblocks/page_6.png",
        "textEn": "4\nOrderblocks\nOB"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/orderblocks/page_7.png",
        "textEn": "Mean Threshold\n5\nImportant Level\n0.5\n1\n0"
      },
      {
        "pageNumber": 8,
        "imageUrl": "/pdf_assets/orderblocks/page_8.png",
        "textEn": "6\nStop Losses\nSwing Low\nOB"
      },
      {
        "pageNumber": 9,
        "imageUrl": "/pdf_assets/orderblocks/page_9.png",
        "textEn": "Resources\nOB Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "OTE.pdf": {
    "fileName": "OTE.pdf",
    "slug": "ote",
    "totalPages": 10,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/ote/page_1.png",
        "textEn": "OPTIMAL TRADE\nENTRY"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/ote/page_2.png",
        "textEn": "OTE\n1\nFibonacci Settings\n2\nAnchor Points\n3\nOptimal Trade Entry (OTE)\n4\nAlignment With PD Arrays\n5\nExtra"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/ote/page_3.png",
        "textEn": "1\nFibonacci Settings\n1\n.79\n.705\n.62\n.5\n0\n1\n.79\n.705\n.62\n.5\n0\nThe Fibonacci Settings:\n0\n0.5\n0.62\n0.705\n0.79\n1"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/ote/page_4.png",
        "textEn": "1\n.79\n.705\n.62\n.5\n0\n2\nAnchor Points\nAnchored from swing high to \nswing low. Liquidity PDF"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/ote/page_5.png",
        "textEn": "3\nOptimal Trade Entry (OTE)\n1\n.79\n.705\n.62\n.5\n0"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/ote/page_6.png",
        "textEn": "4\nAlignment With PD Arrays\n1\n.79\n.705\n.62\n.5\n0"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/ote/page_7.png",
        "textEn": "1\n.79\n.705\n.62\n.5\n0\n5\nExtra"
      },
      {
        "pageNumber": 8,
        "imageUrl": "/pdf_assets/ote/page_8.png",
        "textEn": "1\n.79\n.705\n.62\n.5\n0\n6\nExtra"
      },
      {
        "pageNumber": 9,
        "imageUrl": "/pdf_assets/ote/page_9.png",
        "textEn": "1\n.79\n.705\n.62\n.5\n0\n7\nExtra"
      },
      {
        "pageNumber": 10,
        "imageUrl": "/pdf_assets/ote/page_10.png",
        "textEn": "Resources\nOptimal Trade Entry Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "Position_Sizing.pdf": {
    "fileName": "Position_Sizing.pdf",
    "slug": "position_sizing",
    "totalPages": 9,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/position_sizing/page_1.png",
        "textEn": "POSITION SIZING"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/position_sizing/page_2.png",
        "textEn": "Position Sizing\n1\nWin Rate & Risk : Reward\n2\nPosition Sizing Options\n3\nFixed Contract\n4\nFixed $ / %"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/position_sizing/page_3.png",
        "textEn": "1\nWin Rate & RR\n20%\n30%\n40%\n50%\n60%\n1:1\n1:2\n1:3\n1:4\n1:5\nNot \nProfitable\nNot \nProfitable\nNot \nProfitable\nNot \nProfitable\nNot \nProfitable\nNot \nProfitable\nBreakeven\nBreakeven\nProfitable\nProfitable\nProfitable\nProfitable\nProfitable\nProfitable\nProfitable\nProfitable\nProfitable\nProfitable\nProfitable\nProfitable\nProfitable\nProfitable\nProfitable\nProfitable\nProfitable\nWin Rate\nRisk : Reward Ratio\nAssuming Same $ Risk Per Trade"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/position_sizing/page_4.png",
        "textEn": "2\nPosition Sizing Options\nFixed Contracts\nFixed Dollar\nFixed Percentage\nOptions For Position Sizing"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/position_sizing/page_5.png",
        "textEn": "3\nFixed Contract\n2 NQ Contracts\n20 Points Risk\nRisk = $800\n2 NQ Contracts Used In Each Scenario\n2 NQ Contracts\n40 Points Risk\nRisk = $1600\n2 NQ Contracts\n10 Points Risk\nRisk = $400"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/position_sizing/page_6.png",
        "textEn": "4\nFixed Contract\n2 NQ Contracts\n20 Points Risk\nRisk = $800\n2 NQ Contracts Used In Each Scenario\n2 NQ Contracts\n40 Points Risk\nRisk = $1600\n2 NQ Contracts\n10 Points Risk\nRisk = $400\n-$800 (-1R)\n-$1600 (-1R)\n+$1600 (+4R)\n------------------------\n-$800 (+2R)???"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/position_sizing/page_7.png",
        "textEn": "Fixed $/% \n5\n2.5 Contracts\n20 Points Risk\nRisk = $1000\nAdjust Contracts Per Scenario To \nMaintain Fixed Risk Of $1000\n$ of defined risk / $ per point / stop size\n1000/20/20 = 2.5\n5 NQ Contracts\n10 Points Risk\nRisk = $1000\n1.25 NQ Contracts\n40 Points Risk\nRisk = $1000\n1000/20/40 = 1.25\n1000/20/10 = 5\n25 Micros\n12.5 Micros\n50 Micros"
      },
      {
        "pageNumber": 8,
        "imageUrl": "/pdf_assets/position_sizing/page_8.png",
        "textEn": "Fixed $/% \n6\n2.5 Contracts\n20 Points Risk\nRisk = $1000\nAdjust Contracts Per Scenario To \nMaintain Fixed Risk Of $1000\n$ of defined risk / $ per point / stop size\n1000/20/20 = 2.5\n5 NQ Contracts\n10 Points Risk\nRisk = $1000\n1.25 NQ Contracts\n40 Points Risk\nRisk = $1000\n1000/20/40 = 1.25\n1000/20/10 = 5\n25 Micros\n12.5 Micros\n50 Micros\n-$1000 (-1R)\n-$1000 (-1R)\n+$4000 (+4R)\n------------------------\n+$2000 (+2R)"
      },
      {
        "pageNumber": 9,
        "imageUrl": "/pdf_assets/position_sizing/page_9.png",
        "textEn": "Resources\nPosition Sizing Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "Silver_Bullet_AM.pdf": {
    "fileName": "Silver_Bullet_AM.pdf",
    "slug": "silver_bullet_am",
    "totalPages": 6,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/silver_bullet_am/page_1.png",
        "textEn": "SILVER BULLET\nAM SESSION"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/silver_bullet_am/page_2.png",
        "textEn": "Silver Bullet – AM\n1\nTime\n2\nFramework"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/silver_bullet_am/page_3.png",
        "textEn": "1\nTime\n9:30\n10:00\n11:00\nAM Session \nSilver Bullet Window\n(EST)"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/silver_bullet_am/page_4.png",
        "textEn": "2\nFramework\n9:00am Hourly High \n9:00am Hourly Low \n9:00am Hourly High \n9:00am Hourly Low \nIntraday bias video uses the previous candles high \nand low to frame a reversal. The previous hourly \ncandle (9:00am) will be used in this framework."
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/silver_bullet_am/page_5.png",
        "textEn": "3\nFramework\n10:00\n11:00\nAM Session \nSilver Bullet Window\n(EST)\n9:00am Hourly High\n9:00am Hourly Low \nNASDAQ\n1 Minute Chart"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/silver_bullet_am/page_6.png",
        "textEn": "Resources\nSilver Bullet Video \nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "Sons_Model.pdf": {
    "fileName": "Sons_Model.pdf",
    "slug": "sons_model",
    "totalPages": 6,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/sons_model/page_1.png",
        "textEn": "ICT SON’S MODEL"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/sons_model/page_2.png",
        "textEn": "ICT Son’s Model\n1\nDraw On Liquidity  \n2\nStop Raid\n3\nEntry"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/sons_model/page_3.png",
        "textEn": "1\nDraw On Liquidity\nH1 or M15 Chart"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/sons_model/page_4.png",
        "textEn": "2\nStop Raid\nDraw On Liquidity\nStop Raid\nM5 Chart"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/sons_model/page_5.png",
        "textEn": "3\nEntry\nM5 Stop Raid\n30s Chart"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/sons_model/page_6.png",
        "textEn": "Resources\nICT Son’s Video\nYouTube\nDiscord\nTwitter\nAffiliate Links"
      }
    ]
  },
  "TTrades Reversal Sequence (TTRS).pdf": {
    "fileName": "TTrades Reversal Sequence (TTRS).pdf",
    "slug": "ttrades_reversal_sequence__ttrs_",
    "totalPages": 18,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_1.png",
        "textEn": "TTrades\nBuild an entry model\nFind an entry model that works for you"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_2.png",
        "textEn": "Contents\nTTrades\nKillzones\nTimeframes\nConcepts\nOrder of reversal\n1\n2\n3\n11"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_3.png",
        "textEn": "Killzones\nEastern Standard Time (EST)\nTTrades\n1"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_4.png",
        "textEn": "TImeframes\nTTrades\n2\nChoose an entry timeframe that suites your personality\u001e\n0 Impatient people are generally better suited with a lower time frame entr\u0019\n0 Patient people are generally better suited on a higher time frame for entry\n(Impatient)\n(Patient)\nM1\nM15"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_5.png",
        "textEn": "Concepts - FVG\nTTrades\n3\nBearish Example\nBullish Example\n1\n2\n3\n1\n2\n3"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_6.png",
        "textEn": "Concepts - Inversion\nTTrades\n4"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_7.png",
        "textEn": "Concepts - OB\nTTrades\n5\nBearish Orderblock\nBullish Orderblock\nImportant Level\nOB\nImportant Level\nOB"
      },
      {
        "pageNumber": 8,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_8.png",
        "textEn": "Concepts - Breaker\nTTrades\n6\nBearish Breaker Block\nBullish Breaker Block"
      },
      {
        "pageNumber": 9,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_9.png",
        "textEn": "Concepts - OTE\nTTrades\n7\n0.705\n0.62\n0.79\n0.5\n0\n1"
      },
      {
        "pageNumber": 10,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_10.png",
        "textEn": "Additional - Premium and Discount\nTTrades\n8\n0.5"
      },
      {
        "pageNumber": 11,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_11.png",
        "textEn": "Additional - Premium and Discount\nTTrades\n9\n0.5"
      },
      {
        "pageNumber": 12,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_12.png",
        "textEn": "Additional - SMT\nTTrades\n10\nStronger Asset\nWeaker Asset"
      },
      {
        "pageNumber": 13,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_13.png",
        "textEn": "Order of reversal\nTTrades\n11\n1\n\u0019\u001c turtle soup"
      },
      {
        "pageNumber": 14,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_14.png",
        "textEn": "Order of reversal\nTTrades\n12\n1\n2\n ! turtle sou\u001a\n\u0015! inversion"
      },
      {
        "pageNumber": 15,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_15.png",
        "textEn": "Order of reversal\nTTrades\n13\n1\n2\n3\n'( turtle sou\u001f\n\u0019( inversio\"\n\u001a( cisd / ob"
      },
      {
        "pageNumber": 16,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_16.png",
        "textEn": "Order of reversal\nTTrades\n14\n1\n2\n3\n4\n,' turtle sou$\n ' inversio(\n!' cisd / o\u0018\n\u0017' fvg"
      },
      {
        "pageNumber": 17,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_17.png",
        "textEn": "Order of reversal\nTTrades\n15\n1\n2\n3\n4\n5\n1+ turtle sou(\n$+ inversio,\n%+ cisd / o\u001b\n\u0019+ fv\u0017\n\u0016+ breaker"
      },
      {
        "pageNumber": 18,
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_18.png",
        "textEn": "Additional Resources\nInstagram\nX (Twitter)\nDiscord\nWebsite\nYouTube\nVideo link\nTTrades"
      }
    ]
  },
  "Unicorn_Model.pdf": {
    "fileName": "Unicorn_Model.pdf",
    "slug": "unicorn_model",
    "totalPages": 7,
    "pages": [
      {
        "pageNumber": 1,
        "imageUrl": "/pdf_assets/unicorn_model/page_1.png",
        "textEn": "UNICORN MODEL"
      },
      {
        "pageNumber": 2,
        "imageUrl": "/pdf_assets/unicorn_model/page_2.png",
        "textEn": "Unicorn Model\n1\nFair Value Gaps\n2\nBreaker Blocks\n4\nUnicorn"
      },
      {
        "pageNumber": 3,
        "imageUrl": "/pdf_assets/unicorn_model/page_3.png",
        "textEn": "1\nFair Value Gaps\nBearish\nFair Value Gap\nBullish\nFair Value Gap"
      },
      {
        "pageNumber": 4,
        "imageUrl": "/pdf_assets/unicorn_model/page_4.png",
        "textEn": "2\nBreaker Blocks\nBearish\nBreaker Block\nBullish\nBreaker Block"
      },
      {
        "pageNumber": 5,
        "imageUrl": "/pdf_assets/unicorn_model/page_5.png",
        "textEn": "3\nBreaker Block\nBearish\nBreaker Block\nBullish\nBreaker Block"
      },
      {
        "pageNumber": 6,
        "imageUrl": "/pdf_assets/unicorn_model/page_6.png",
        "textEn": "4\nUnicorn\nBearish\nBreaker Block \n+ FVG\nBullish\nBreaker Block\n+ FVG"
      },
      {
        "pageNumber": 7,
        "imageUrl": "/pdf_assets/unicorn_model/page_7.png",
        "textEn": "Resources\nUnicorn Video \nYouTube\nDiscord\nTwitter\nAffiliate Links\n@4500px\n@Ash_Ketchum_21"
      }
    ]
  }
};