export interface ArticleSection {
  headingVi: string;
  headingEn: string;
  contentVi: string[];
  contentEn: string[];
  imageUrl?: string;
  captionVi?: string;
  captionEn?: string;
  highlightBoxVi?: string;
  highlightBoxEn?: string;
}

export interface RichLessonArticle {
  pdfFileName: string;
  slug: string;
  totalPages: number;
  sections: ArticleSection[];
}

export const RICH_LESSON_ARTICLES: Record<string, RichLessonArticle> = {
  "Discount__Premium.pdf": {
    "pdfFileName": "Discount__Premium.pdf",
    "slug": "discount__premium",
    "totalPages": 8,
    "sections": [
      {
        "headingVi": "vùng định giá thấp (Discount) & vùng định giá cao (Premium)",
        "headingEn": "DISCOUNT & PREMIUM",
        "contentVi": [
          "vùng định giá thấp (Discount) & vùng định giá cao (Premium)"
        ],
        "contentEn": [
          "DISCOUNT & PREMIUM"
        ],
        "imageUrl": "/pdf_assets/discount__premium/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/8)",
        "captionEn": "Detailed chart analysis diagram (Page 1/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "vùng định giá thấp (Discount) & vùng định giá cao (Premium)",
        "headingEn": "Discount & Premium",
        "contentVi": [
          "vùng định giá thấp (Discount) & vùng định giá cao (Premium)",
          "Range High & Low",
          "vùng định giá thấp (Discount) & vùng định giá cao (Premium)",
          "Why?",
          "vùng định giá cao (Premium) PD Array",
          "vùng định giá thấp (Discount) PD Array"
        ],
        "contentEn": [
          "Discount & Premium",
          "Range High & Low",
          "Discount & Premium",
          "Why?",
          "Premium PD Array",
          "Discount PD Array"
        ],
        "imageUrl": "/pdf_assets/discount__premium/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/8)",
        "captionEn": "Detailed chart analysis diagram (Page 2/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Range High & Low",
        "headingEn": "Range High & Low",
        "contentVi": [
          "Range High & Low",
          "vùng định giá thấp (Discount) and vùng định giá cao (Premium) is based off the",
          "range high to the range low.",
          "An easy way to view a range is to look for",
          "where sell side and Thanh khoản Buyside (BSL) is",
          "resting.",
          "Liquidity PDF",
          "Thanh khoản Buyside (BSL)",
          "Thanh khoản Sellside (SSL)"
        ],
        "contentEn": [
          "Range High & Low",
          "Discount and premium is based off the",
          "range high to the range low.",
          "An easy way to view a range is to look for",
          "where sell side and buyside liquidity is",
          "resting.",
          "Liquidity PDF",
          "Buyside Liquidity",
          "Sellside Liquidity"
        ],
        "imageUrl": "/pdf_assets/discount__premium/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/8)",
        "captionEn": "Detailed chart analysis diagram (Page 3/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "vùng định giá thấp (Discount) & vùng định giá cao (Premium)",
        "headingEn": "Discount & Premium",
        "contentVi": [
          "vùng định giá thấp (Discount) & vùng định giá cao (Premium)",
          "A Gann Box or Fibonacci can be used from",
          "the high to the low, marking out the middle",
          "of the range, or 0.5.",
          "The top 50% or above the 0.5 is considered",
          "a vùng định giá cao (Premium).",
          "The bottom 50% or below the 0.5 is",
          "considered a vùng định giá thấp (Discount).",
          "0.5"
        ],
        "contentEn": [
          "Discount & Premium",
          "A Gann Box or Fibonacci can be used from",
          "the high to the low, marking out the middle",
          "of the range, or 0.5.",
          "The top 50% or above the 0.5 is considered",
          "a premium.",
          "The bottom 50% or below the 0.5 is",
          "considered a discount.",
          "0.5"
        ],
        "imageUrl": "/pdf_assets/discount__premium/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/8)",
        "captionEn": "Detailed chart analysis diagram (Page 4/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Why?",
        "headingEn": "Why?",
        "contentVi": [
          "Why?",
          "Short positions in vùng định giá cao (Premium) give better",
          "reward to risk than a short at mức giá cân bằng (Equilibrium 50%)",
          "(0.5) or a short in vùng định giá thấp (Discount).",
          "0.5",
          "RR>1",
          "RR=1",
          "RR<1",
          "vùng định giá cao (Premium)",
          "mức giá cân bằng (Equilibrium 50%)",
          "vùng định giá thấp (Discount)",
          "Short",
          "Entry:",
          "0.5",
          "Long positions in vùng định giá thấp (Discount) give better",
          "reward to risk than a long at mức giá cân bằng (Equilibrium 50%)",
          "(0.5) or a long in vùng định giá cao (Premium).",
          "RR>1",
          "RR=1",
          "RR<1",
          "Long",
          "vùng định giá cao (Premium)",
          "vùng định giá thấp (Discount)",
          "mức giá cân bằng (Equilibrium 50%)",
          "Entry:"
        ],
        "contentEn": [
          "Why?",
          "Short positions in premium give better",
          "reward to risk than a short at equilibrium",
          "(0.5) or a short in discount.",
          "0.5",
          "RR>1",
          "RR=1",
          "RR<1",
          "Premium",
          "Equilibrium",
          "Discount",
          "Short",
          "Entry:",
          "0.5",
          "Long positions in discount give better",
          "reward to risk than a long at equilibrium",
          "(0.5) or a long in premium.",
          "RR>1",
          "RR=1",
          "RR<1",
          "Long",
          "Premium",
          "Discount",
          "Equilibrium",
          "Entry:"
        ],
        "imageUrl": "/pdf_assets/discount__premium/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/8)",
        "captionEn": "Detailed chart analysis diagram (Page 5/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "vùng định giá cao (Premium) PD Array",
        "headingEn": "Premium PD Array",
        "contentVi": [
          "vùng định giá cao (Premium) PD Array",
          "0.5",
          "vùng định giá cao (Premium) arrays, or PD arrays in a vùng định giá cao (Premium)",
          "are used to frame a short setup."
        ],
        "contentEn": [
          "Premium PD Array",
          "0.5",
          "Premium arrays, or PD arrays in a premium",
          "are used to frame a short setup."
        ],
        "imageUrl": "/pdf_assets/discount__premium/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/8)",
        "captionEn": "Detailed chart analysis diagram (Page 6/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "vùng định giá thấp (Discount) PD Array",
        "headingEn": "Discount PD Array",
        "contentVi": [
          "vùng định giá thấp (Discount) PD Array",
          "0.5",
          "vùng định giá thấp (Discount) arrays, or PD arrays in a vùng định giá thấp (Discount)",
          "are used to frame a long setup.",
          "FVG"
        ],
        "contentEn": [
          "Discount PD Array",
          "0.5",
          "Discount arrays, or PD arrays in a discount",
          "are used to frame a long setup.",
          "FVG"
        ],
        "imageUrl": "/pdf_assets/discount__premium/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/8)",
        "captionEn": "Detailed chart analysis diagram (Page 7/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "vùng định giá thấp (Discount) & vùng định giá cao (Premium) Video"
        ],
        "contentEn": [
          "Resources",
          "Discount & Premium Video"
        ],
        "imageUrl": "/pdf_assets/discount__premium/page_8.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 8/8)",
        "captionEn": "Detailed chart analysis diagram (Page 8/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 8): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 8): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "Important_Liquidity_Levels.pdf": {
    "pdfFileName": "Important_Liquidity_Levels.pdf",
    "slug": "important_liquidity_levels",
    "totalPages": 10,
    "sections": [
      {
        "headingVi": "IMPORTANT LIQUIDITY",
        "headingEn": "IMPORTANT LIQUIDITY",
        "contentVi": [
          "IMPORTANT LIQUIDITY",
          "LEVELS"
        ],
        "contentEn": [
          "IMPORTANT LIQUIDITY",
          "LEVELS"
        ],
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/10)",
        "captionEn": "Detailed chart analysis diagram (Page 1/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Important Liquidity",
        "headingEn": "Important Liquidity",
        "contentVi": [
          "Important Liquidity",
          "Candles",
          "Monthly",
          "Weekly",
          "Daily",
          "Killzones",
          "Sessions"
        ],
        "contentEn": [
          "Important Liquidity",
          "Candles",
          "Monthly",
          "Weekly",
          "Daily",
          "Killzones",
          "Sessions"
        ],
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/10)",
        "captionEn": "Detailed chart analysis diagram (Page 2/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Candles",
        "headingEn": "Candles",
        "contentVi": [
          "Candles",
          "Consolidation",
          "One Side",
          "Both Sides"
        ],
        "contentEn": [
          "Candles",
          "Consolidation",
          "One Side",
          "Both Sides"
        ],
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/10)",
        "captionEn": "Detailed chart analysis diagram (Page 3/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Monthly",
        "headingEn": "Monthly",
        "contentVi": [
          "Monthly",
          "Previous Month Low",
          "Previous Month High",
          "Weekly Timeframe",
          "Previous Month Low",
          "Previous Month High",
          "Weekly Timeframe"
        ],
        "contentEn": [
          "Monthly",
          "Previous Month Low",
          "Previous Month High",
          "Weekly Timeframe",
          "Previous Month Low",
          "Previous Month High",
          "Weekly Timeframe"
        ],
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/10)",
        "captionEn": "Detailed chart analysis diagram (Page 4/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Weekly",
        "headingEn": "Weekly",
        "contentVi": [
          "Weekly",
          "Previous Weeks Low",
          "Previous Weeks High",
          "Daily Timeframe",
          "Previous Weeks Low",
          "Previous Weeks High",
          "Daily Timeframe"
        ],
        "contentEn": [
          "Weekly",
          "Previous Weeks Low",
          "Previous Weeks High",
          "Daily Timeframe",
          "Previous Weeks Low",
          "Previous Weeks High",
          "Daily Timeframe"
        ],
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/10)",
        "captionEn": "Detailed chart analysis diagram (Page 5/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Daily",
        "headingEn": "Daily",
        "contentVi": [
          "Daily",
          "Previous Day Low",
          "Previous Day High",
          "4 Hour Timeframe",
          "Previous Day Low",
          "Previous Day High",
          "4 Hour Timeframe"
        ],
        "contentEn": [
          "Daily",
          "Previous Day Low",
          "Previous Day High",
          "4 Hour Timeframe",
          "Previous Day Low",
          "Previous Day High",
          "4 Hour Timeframe"
        ],
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/10)",
        "captionEn": "Detailed chart analysis diagram (Page 6/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Killzones",
        "headingEn": "Killzones",
        "contentVi": [
          "Killzones",
          "Asia: 20:00 – 00:00",
          "London: 02:00 – 05:00",
          "New York AM: 08:30 – 11:00",
          "New York PM: 13:30 – 16:00",
          "Indices Killzones:",
          "20:00 – 00:00",
          "02:00 – 05:00",
          "08:30 – 11:00",
          "13:30 – 16:00",
          "Eastern Standard Time (EST)"
        ],
        "contentEn": [
          "Killzones",
          "Asia: 20:00 – 00:00",
          "London: 02:00 – 05:00",
          "New York AM: 08:30 – 11:00",
          "New York PM: 13:30 – 16:00",
          "Indices Killzones:",
          "20:00 – 00:00",
          "02:00 – 05:00",
          "08:30 – 11:00",
          "13:30 – 16:00",
          "Eastern Standard Time (EST)"
        ],
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/10)",
        "captionEn": "Detailed chart analysis diagram (Page 7/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Sessions",
        "headingEn": "Sessions",
        "contentVi": [
          "Sessions",
          "Eastern Standard Time (EST)",
          "Asian Session High",
          "Asian Session Low",
          "London Session Low",
          "London Session High"
        ],
        "contentEn": [
          "Sessions",
          "Eastern Standard Time (EST)",
          "Asian Session High",
          "Asian Session Low",
          "London Session Low",
          "London Session High"
        ],
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_8.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 8/10)",
        "captionEn": "Detailed chart analysis diagram (Page 8/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 8): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 8): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Sessions",
        "headingEn": "Sessions",
        "contentVi": [
          "Sessions",
          "Eastern Standard Time (EST)",
          "Asian Session High",
          "Asian Session Low",
          "London Session Low",
          "London Session High"
        ],
        "contentEn": [
          "Sessions",
          "Eastern Standard Time (EST)",
          "Asian Session High",
          "Asian Session Low",
          "London Session Low",
          "London Session High"
        ],
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_9.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 9/10)",
        "captionEn": "Detailed chart analysis diagram (Page 9/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 9): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 9): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "Important Liquidity Levels"
        ],
        "contentEn": [
          "Resources",
          "Important Liquidity Levels"
        ],
        "imageUrl": "/pdf_assets/important_liquidity_levels/page_10.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 10/10)",
        "captionEn": "Detailed chart analysis diagram (Page 10/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 10): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 10): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "IRL-ERL.pdf": {
    "pdfFileName": "IRL-ERL.pdf",
    "slug": "irl_erl",
    "totalPages": 11,
    "sections": [
      {
        "headingVi": "INTERNAL & EXTERNAL",
        "headingEn": "INTERNAL & EXTERNAL",
        "contentVi": [
          "INTERNAL & EXTERNAL",
          "RANGE LIQUIDITY"
        ],
        "contentEn": [
          "INTERNAL & EXTERNAL",
          "RANGE LIQUIDITY"
        ],
        "imageUrl": "/pdf_assets/irl_erl/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/11)",
        "captionEn": "Detailed chart analysis diagram (Page 1/11)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "IRL & ERL",
        "headingEn": "IRL & ERL",
        "contentVi": [
          "IRL & ERL",
          "Internal Liquidity",
          "External Liquidity",
          "Relationship"
        ],
        "contentEn": [
          "IRL & ERL",
          "Internal Liquidity",
          "External Liquidity",
          "Relationship"
        ],
        "imageUrl": "/pdf_assets/irl_erl/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/11)",
        "captionEn": "Detailed chart analysis diagram (Page 2/11)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Internal Range Liquidity",
        "headingEn": "Internal Range Liquidity",
        "contentVi": [
          "Internal Range Liquidity"
        ],
        "contentEn": [
          "Internal Range Liquidity"
        ],
        "imageUrl": "/pdf_assets/irl_erl/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/11)",
        "captionEn": "Detailed chart analysis diagram (Page 3/11)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "External Range Liquidity",
        "headingEn": "External Range Liquidity",
        "contentVi": [
          "External Range Liquidity",
          "Thanh khoản Sellside (SSL)",
          "Thanh khoản Buyside (BSL)",
          "External Range Liquidity"
        ],
        "contentEn": [
          "External Range Liquidity",
          "Sellside Liquidity",
          "Buyside Liquidity",
          "External Range Liquidity"
        ],
        "imageUrl": "/pdf_assets/irl_erl/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/11)",
        "captionEn": "Detailed chart analysis diagram (Page 4/11)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Relationship",
        "headingEn": "Relationship",
        "contentVi": [
          "Relationship",
          "External Range Liquidity",
          "Internal Range Liquidity"
        ],
        "contentEn": [
          "Relationship",
          "External Range Liquidity",
          "Internal Range Liquidity"
        ],
        "imageUrl": "/pdf_assets/irl_erl/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/11)",
        "captionEn": "Detailed chart analysis diagram (Page 5/11)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "External Range Liquidity",
        "headingEn": "External Range Liquidity",
        "contentVi": [
          "External Range Liquidity",
          "Internal Range Liquidity",
          "Relationship"
        ],
        "contentEn": [
          "External Range Liquidity",
          "Internal Range Liquidity",
          "Relationship"
        ],
        "imageUrl": "/pdf_assets/irl_erl/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/11)",
        "captionEn": "Detailed chart analysis diagram (Page 6/11)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "External Range Liquidity",
        "headingEn": "External Range Liquidity",
        "contentVi": [
          "External Range Liquidity",
          "Internal Range Liquidity",
          "Relationship"
        ],
        "contentEn": [
          "External Range Liquidity",
          "Internal Range Liquidity",
          "Relationship"
        ],
        "imageUrl": "/pdf_assets/irl_erl/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/11)",
        "captionEn": "Detailed chart analysis diagram (Page 7/11)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "External Range Liquidity",
        "headingEn": "External Range Liquidity",
        "contentVi": [
          "External Range Liquidity",
          "External Range Liquidity",
          "Internal Range Liquidity",
          "Relationship"
        ],
        "contentEn": [
          "External Range Liquidity",
          "External Range Liquidity",
          "Internal Range Liquidity",
          "Relationship"
        ],
        "imageUrl": "/pdf_assets/irl_erl/page_8.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 8/11)",
        "captionEn": "Detailed chart analysis diagram (Page 8/11)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 8): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 8): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "External Range Liquidity",
        "headingEn": "External Range Liquidity",
        "contentVi": [
          "External Range Liquidity",
          "External Range Liquidity",
          "Internal Range Liquidity",
          "Relationship"
        ],
        "contentEn": [
          "External Range Liquidity",
          "External Range Liquidity",
          "Internal Range Liquidity",
          "Relationship"
        ],
        "imageUrl": "/pdf_assets/irl_erl/page_9.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 9/11)",
        "captionEn": "Detailed chart analysis diagram (Page 9/11)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 9): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 9): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "External Range Liquidity",
        "headingEn": "External Range Liquidity",
        "contentVi": [
          "External Range Liquidity",
          "External Range Liquidity",
          "Internal Range Liquidity",
          "Relationship"
        ],
        "contentEn": [
          "External Range Liquidity",
          "External Range Liquidity",
          "Internal Range Liquidity",
          "Relationship"
        ],
        "imageUrl": "/pdf_assets/irl_erl/page_10.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 10/11)",
        "captionEn": "Detailed chart analysis diagram (Page 10/11)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 10): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 10): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "Internal & External Liquidity Video"
        ],
        "contentEn": [
          "Resources",
          "Internal & External Liquidity Video"
        ],
        "imageUrl": "/pdf_assets/irl_erl/page_11.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 11/11)",
        "captionEn": "Detailed chart analysis diagram (Page 11/11)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 11): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 11): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "Liquidity.pdf": {
    "pdfFileName": "Liquidity.pdf",
    "slug": "liquidity",
    "totalPages": 8,
    "sections": [
      {
        "headingVi": "LIQUIDITY:",
        "headingEn": "LIQUIDITY:",
        "contentVi": [
          "LIQUIDITY:",
          "BUYSIDE & SELLSIDE"
        ],
        "contentEn": [
          "LIQUIDITY:",
          "BUYSIDE & SELLSIDE"
        ],
        "imageUrl": "/pdf_assets/liquidity/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/8)",
        "captionEn": "Detailed chart analysis diagram (Page 1/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Liquidity",
        "headingEn": "Liquidity",
        "contentVi": [
          "Liquidity",
          "Swing Highs & Lows",
          "Buyside & Sellside",
          "Types Of Liquidity",
          "Previous Day & Week",
          "Session Highs & Lows"
        ],
        "contentEn": [
          "Liquidity",
          "Swing Highs & Lows",
          "Buyside & Sellside",
          "Types Of Liquidity",
          "Previous Day & Week",
          "Session Highs & Lows"
        ],
        "imageUrl": "/pdf_assets/liquidity/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/8)",
        "captionEn": "Detailed chart analysis diagram (Page 2/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Swing Highs & Lows",
        "headingEn": "Swing Highs & Lows",
        "contentVi": [
          "Swing Highs & Lows",
          "A Swing High is formed when there is a high",
          "with a lower high to the left and right.",
          "A Swing Low is formed when there is a low",
          "with a higher low to the left and right."
        ],
        "contentEn": [
          "Swing Highs & Lows",
          "A Swing High is formed when there is a high",
          "with a lower high to the left and right.",
          "A Swing Low is formed when there is a low",
          "with a higher low to the left and right."
        ],
        "imageUrl": "/pdf_assets/liquidity/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/8)",
        "captionEn": "Detailed chart analysis diagram (Page 3/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Buyside & Sellside",
        "headingEn": "Buyside & Sellside",
        "contentVi": [
          "Buyside & Sellside",
          "A Swing High at the top of the",
          "range will have stop losses from",
          "short positions (buy stops). This",
          "is called Thanh khoản Buyside (BSL).",
          "A Swing Low at the bottom of",
          "the range will have stop losses",
          "from long positions (sell stops).",
          "This is called Thanh khoản Sellside (SSL).",
          "Thanh khoản Sellside (SSL)",
          "Thanh khoản Buyside (BSL)"
        ],
        "contentEn": [
          "Buyside & Sellside",
          "A Swing High at the top of the",
          "range will have stop losses from",
          "short positions (buy stops). This",
          "is called buyside liquidity.",
          "A Swing Low at the bottom of",
          "the range will have stop losses",
          "from long positions (sell stops).",
          "This is called sellside liquidity.",
          "Sellside Liquidity",
          "Buyside Liquidity"
        ],
        "imageUrl": "/pdf_assets/liquidity/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/8)",
        "captionEn": "Detailed chart analysis diagram (Page 4/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Types Of Liquidity",
        "headingEn": "Types Of Liquidity",
        "contentVi": [
          "Types Of Liquidity",
          "Thanh khoản Sellside (SSL)",
          "Thanh khoản Buyside (BSL)",
          "Old Highs & Lows are previous",
          "highs and lows.",
          "Thanh khoản Sellside (SSL)",
          "Thanh khoản Buyside (BSL)",
          "Equal Highs & Lows are when",
          "price reaches the same price",
          "level multiple times. Appearing",
          "to be support and resistance.",
          "Relatively Equal Highs",
          "Relatively Equal Lows",
          "Old Low",
          "Old High"
        ],
        "contentEn": [
          "Types Of Liquidity",
          "Sellside Liquidity",
          "Buyside Liquidity",
          "Old Highs & Lows are previous",
          "highs and lows.",
          "Sellside Liquidity",
          "Buyside Liquidity",
          "Equal Highs & Lows are when",
          "price reaches the same price",
          "level multiple times. Appearing",
          "to be support and resistance.",
          "Relatively Equal Highs",
          "Relatively Equal Lows",
          "Old Low",
          "Old High"
        ],
        "imageUrl": "/pdf_assets/liquidity/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/8)",
        "captionEn": "Detailed chart analysis diagram (Page 5/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Previous Day & Week",
        "headingEn": "Previous Day & Week",
        "contentVi": [
          "Previous Day & Week",
          "Previous Week High & Low are",
          "liquidity levels that can be used as",
          "a draw on liquidity or frame a",
          "reversal or continuation.",
          "Previous Weeks Low",
          "Previous Weeks High",
          "Previous Day Low",
          "Previous Day High",
          "Daily Timeframe",
          "4 Hour Timeframe",
          "Previous Day High & Low are",
          "liquidity levels that can be used as",
          "a draw on liquidity or frame a",
          "reversal or continuation."
        ],
        "contentEn": [
          "Previous Day & Week",
          "Previous Week High & Low are",
          "liquidity levels that can be used as",
          "a draw on liquidity or frame a",
          "reversal or continuation.",
          "Previous Weeks Low",
          "Previous Weeks High",
          "Previous Day Low",
          "Previous Day High",
          "Daily Timeframe",
          "4 Hour Timeframe",
          "Previous Day High & Low are",
          "liquidity levels that can be used as",
          "a draw on liquidity or frame a",
          "reversal or continuation."
        ],
        "imageUrl": "/pdf_assets/liquidity/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/8)",
        "captionEn": "Detailed chart analysis diagram (Page 6/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Session Highs & Lows",
        "headingEn": "Session Highs & Lows",
        "contentVi": [
          "Session Highs & Lows",
          "Asian Session High",
          "Asian Session Low",
          "London Session Low",
          "London Session High",
          "Session Highs & Lows are",
          "liquidity levels that can be used as",
          "a draw on liquidity or frame a",
          "reversal or continuation"
        ],
        "contentEn": [
          "Session Highs & Lows",
          "Asian Session High",
          "Asian Session Low",
          "London Session Low",
          "London Session High",
          "Session Highs & Lows are",
          "liquidity levels that can be used as",
          "a draw on liquidity or frame a",
          "reversal or continuation"
        ],
        "imageUrl": "/pdf_assets/liquidity/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/8)",
        "captionEn": "Detailed chart analysis diagram (Page 7/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "Liquidity Video"
        ],
        "contentEn": [
          "Resources",
          "Liquidity Video"
        ],
        "imageUrl": "/pdf_assets/liquidity/page_8.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 8/8)",
        "captionEn": "Detailed chart analysis diagram (Page 8/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 8): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 8): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "Daily_Bias.pdf": {
    "pdfFileName": "Daily_Bias.pdf",
    "slug": "daily_bias",
    "totalPages": 9,
    "sections": [
      {
        "headingVi": "DAILY BIAS",
        "headingEn": "DAILY BIAS",
        "contentVi": [
          "DAILY BIAS"
        ],
        "contentEn": [
          "DAILY BIAS"
        ],
        "imageUrl": "/pdf_assets/daily_bias/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/9)",
        "captionEn": "Detailed chart analysis diagram (Page 1/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Daily Bias",
        "headingEn": "Daily Bias",
        "contentVi": [
          "Daily Bias",
          "Previous Day High & Low",
          "Previous Week High & Low",
          "Swing Points",
          "Failure To Displace",
          "Next Day Model",
          "Credit to The MMXM Trader for his teachings"
        ],
        "contentEn": [
          "Daily Bias",
          "Previous Day High & Low",
          "Previous Week High & Low",
          "Swing Points",
          "Failure To Displace",
          "Next Day Model",
          "Credit to The MMXM Trader for his teachings"
        ],
        "imageUrl": "/pdf_assets/daily_bias/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/9)",
        "captionEn": "Detailed chart analysis diagram (Page 2/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Previous Day High & Low",
        "headingEn": "Previous Day High & Low",
        "contentVi": [
          "Previous Day High & Low",
          "Previous Day High & Low are liquidity levels that can be used",
          "as a draw on liquidity or frame a reversal or continuation.",
          "Previous Day High",
          "Previous Day Low",
          "Is price more likely to reach for previous day high or previous day low?",
          "Previous Day High",
          "Previous Day Low",
          "Previous Day High",
          "Previous Day Low",
          "Previous Day High",
          "Previous Day Low",
          "Reversals can be framed off PDH and PDL when there is a failure to displace.",
          "Reversal Framed",
          "Off PDH",
          "Anticipate PDL",
          "As Draw",
          "Reversal Framed",
          "Off PDL",
          "PDH",
          "Anticipate PDH",
          "As Draw",
          "Anticipate PDH",
          "As Draw",
          "Daily Timeframe"
        ],
        "contentEn": [
          "Previous Day High & Low",
          "Previous Day High & Low are liquidity levels that can be used",
          "as a draw on liquidity or frame a reversal or continuation.",
          "Previous Day High",
          "Previous Day Low",
          "Is price more likely to reach for previous day high or previous day low?",
          "Previous Day High",
          "Previous Day Low",
          "Previous Day High",
          "Previous Day Low",
          "Previous Day High",
          "Previous Day Low",
          "Reversals can be framed off PDH and PDL when there is a failure to displace.",
          "Reversal Framed",
          "Off PDH",
          "Anticipate PDL",
          "As Draw",
          "Reversal Framed",
          "Off PDL",
          "PDH",
          "Anticipate PDH",
          "As Draw",
          "Anticipate PDH",
          "As Draw",
          "Daily Timeframe"
        ],
        "imageUrl": "/pdf_assets/daily_bias/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/9)",
        "captionEn": "Detailed chart analysis diagram (Page 3/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Previous Day High & Low",
        "headingEn": "Previous Day High & Low",
        "contentVi": [
          "Previous Day High & Low",
          "Previous Day Low",
          "Previous Day High",
          "4 Hour Timeframe",
          "Previous Day Low",
          "Previous Day High",
          "4 Hour Timeframe",
          "Example of Previous Day Low being used as a draw on",
          "liquidity and being used to frame a reversal. H4 chart is",
          "shown."
        ],
        "contentEn": [
          "Previous Day High & Low",
          "Previous Day Low",
          "Previous Day High",
          "4 Hour Timeframe",
          "Previous Day Low",
          "Previous Day High",
          "4 Hour Timeframe",
          "Example of Previous Day Low being used as a draw on",
          "liquidity and being used to frame a reversal. H4 chart is",
          "shown."
        ],
        "imageUrl": "/pdf_assets/daily_bias/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/9)",
        "captionEn": "Detailed chart analysis diagram (Page 4/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Previous Week High & Low",
        "headingEn": "Previous Week High & Low",
        "contentVi": [
          "Previous Week High & Low",
          "Previous Week High & Low are liquidity levels that can be used as",
          "a draw on liquidity or frame a reversal or continuation.",
          "Previous Weeks Low",
          "Previous Weeks High",
          "Previous Weeks Low",
          "Previous Weeks High",
          "Daily Timeframe"
        ],
        "contentEn": [
          "Previous Week High & Low",
          "Previous Week High & Low are liquidity levels that can be used as",
          "a draw on liquidity or frame a reversal or continuation.",
          "Previous Weeks Low",
          "Previous Weeks High",
          "Previous Weeks Low",
          "Previous Weeks High",
          "Daily Timeframe"
        ],
        "imageUrl": "/pdf_assets/daily_bias/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/9)",
        "captionEn": "Detailed chart analysis diagram (Page 5/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Swing Points",
        "headingEn": "Swing Points",
        "contentVi": [
          "Swing Points",
          "Swing points in the market can be used",
          "as a draw on liquidity or be used to",
          "frame a reversal.",
          "Anticipate As Draw On Liquidity",
          "Reversal Framed Off Swing Point",
          "Daily Timeframe"
        ],
        "contentEn": [
          "Swing Points",
          "Swing points in the market can be used",
          "as a draw on liquidity or be used to",
          "frame a reversal.",
          "Anticipate As Draw On Liquidity",
          "Reversal Framed Off Swing Point",
          "Daily Timeframe"
        ],
        "imageUrl": "/pdf_assets/daily_bias/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/9)",
        "captionEn": "Detailed chart analysis diagram (Page 6/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Failure To Displace",
        "headingEn": "Failure To Displace",
        "contentVi": [
          "Failure To Displace",
          "Failure to displace over old highs & lows can",
          "be used to frame a reversal.",
          "Reversal Framed Off Swing Point",
          "Reversal Framed Off Swing Point",
          "Daily Timeframe"
        ],
        "contentEn": [
          "Failure To Displace",
          "Failure to displace over old highs & lows can",
          "be used to frame a reversal.",
          "Reversal Framed Off Swing Point",
          "Reversal Framed Off Swing Point",
          "Daily Timeframe"
        ],
        "imageUrl": "/pdf_assets/daily_bias/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/9)",
        "captionEn": "Detailed chart analysis diagram (Page 7/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Next Day Model",
        "headingEn": "Next Day Model",
        "contentVi": [
          "Next Day Model",
          "When price respects a PD array or fails to",
          "displace over a swing high or low, the next",
          "candle can be anticipated.",
          "Daily Timeframe"
        ],
        "contentEn": [
          "Next Day Model",
          "When price respects a PD array or fails to",
          "displace over a swing high or low, the next",
          "candle can be anticipated.",
          "Daily Timeframe"
        ],
        "imageUrl": "/pdf_assets/daily_bias/page_8.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 8/9)",
        "captionEn": "Detailed chart analysis diagram (Page 8/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 8): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 8): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "Daily Bias Video"
        ],
        "contentEn": [
          "Resources",
          "Daily Bias Video"
        ],
        "imageUrl": "/pdf_assets/daily_bias/page_9.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 9/9)",
        "captionEn": "Detailed chart analysis diagram (Page 9/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 9): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 9): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "Intraday_Bias.pdf": {
    "pdfFileName": "Intraday_Bias.pdf",
    "slug": "intraday_bias",
    "totalPages": 8,
    "sections": [
      {
        "headingVi": "INTRADAY BIAS",
        "headingEn": "INTRADAY BIAS",
        "contentVi": [
          "INTRADAY BIAS"
        ],
        "contentEn": [
          "INTRADAY BIAS"
        ],
        "imageUrl": "/pdf_assets/intraday_bias/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/8)",
        "captionEn": "Detailed chart analysis diagram (Page 1/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Intraday Bias",
        "headingEn": "Intraday Bias",
        "contentVi": [
          "Intraday Bias",
          "Previous Candle High (PCH) & Low (PCL)",
          "Swing Points",
          "Failure To Displace",
          "Next Candle Model",
          "Credit to The MMXM Trader for his teachings"
        ],
        "contentEn": [
          "Intraday Bias",
          "Previous Candle High (PCH) & Low (PCL)",
          "Swing Points",
          "Failure To Displace",
          "Next Candle Model",
          "Credit to The MMXM Trader for his teachings"
        ],
        "imageUrl": "/pdf_assets/intraday_bias/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/8)",
        "captionEn": "Detailed chart analysis diagram (Page 2/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Previous Candle High & Low",
        "headingEn": "Previous Candle High & Low",
        "contentVi": [
          "Previous Candle High & Low",
          "Previous Candle High & Low are liquidity levels that can be",
          "used as a draw on liquidity or frame a reversal or",
          "continuation.",
          "PCH",
          "PCL",
          "Is price more likely to reach for previous candle high or low?",
          "PCH",
          "PCL",
          "PCH",
          "PCL",
          "PCH",
          "PCL",
          "Reversals can be framed off PCH and PCL when there is a failure to displace.",
          "Reversal Framed",
          "Off PCH",
          "Anticipate PCL",
          "As Draw",
          "Reversal Framed",
          "Off PCL",
          "PCH",
          "Anticipate PCH",
          "As Draw",
          "Anticipate PCH",
          "As Draw",
          "H4 / H1 / M30 / M15",
          "Timeframe"
        ],
        "contentEn": [
          "Previous Candle High & Low",
          "Previous Candle High & Low are liquidity levels that can be",
          "used as a draw on liquidity or frame a reversal or",
          "continuation.",
          "PCH",
          "PCL",
          "Is price more likely to reach for previous candle high or low?",
          "PCH",
          "PCL",
          "PCH",
          "PCL",
          "PCH",
          "PCL",
          "Reversals can be framed off PCH and PCL when there is a failure to displace.",
          "Reversal Framed",
          "Off PCH",
          "Anticipate PCL",
          "As Draw",
          "Reversal Framed",
          "Off PCL",
          "PCH",
          "Anticipate PCH",
          "As Draw",
          "Anticipate PCH",
          "As Draw",
          "H4 / H1 / M30 / M15",
          "Timeframe"
        ],
        "imageUrl": "/pdf_assets/intraday_bias/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/8)",
        "captionEn": "Detailed chart analysis diagram (Page 3/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Previous Candle High & Low",
        "headingEn": "Previous Candle High & Low",
        "contentVi": [
          "Previous Candle High & Low",
          "Previous Candle Low",
          "Previous Candle High",
          "Lower Time Frame",
          "Previous Candle Low",
          "Previous Candle High",
          "Lower Time Frame",
          "Example of Previous Candle Low being used as a draw on",
          "liquidity and being used to frame a reversal.",
          "H4 / H1 / M30 / M15",
          "Timeframe"
        ],
        "contentEn": [
          "Previous Candle High & Low",
          "Previous Candle Low",
          "Previous Candle High",
          "Lower Time Frame",
          "Previous Candle Low",
          "Previous Candle High",
          "Lower Time Frame",
          "Example of Previous Candle Low being used as a draw on",
          "liquidity and being used to frame a reversal.",
          "H4 / H1 / M30 / M15",
          "Timeframe"
        ],
        "imageUrl": "/pdf_assets/intraday_bias/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/8)",
        "captionEn": "Detailed chart analysis diagram (Page 4/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Swing Points",
        "headingEn": "Swing Points",
        "contentVi": [
          "Swing Points",
          "Swing points in the market can be used",
          "as a draw on liquidity or be used to",
          "frame a reversal.",
          "Anticipate As Draw On Liquidity",
          "Reversal Framed Off Swing Point",
          "H4 / H1 / M30 / M15",
          "Timeframe"
        ],
        "contentEn": [
          "Swing Points",
          "Swing points in the market can be used",
          "as a draw on liquidity or be used to",
          "frame a reversal.",
          "Anticipate As Draw On Liquidity",
          "Reversal Framed Off Swing Point",
          "H4 / H1 / M30 / M15",
          "Timeframe"
        ],
        "imageUrl": "/pdf_assets/intraday_bias/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/8)",
        "captionEn": "Detailed chart analysis diagram (Page 5/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Failure To Displace",
        "headingEn": "Failure To Displace",
        "contentVi": [
          "Failure To Displace",
          "Failure to displace over old highs & lows can",
          "be used to frame a reversal.",
          "Reversal Framed Off Swing Point",
          "Reversal Framed Off Swing Point",
          "H4 / H1 / M30 / M15",
          "Timeframe"
        ],
        "contentEn": [
          "Failure To Displace",
          "Failure to displace over old highs & lows can",
          "be used to frame a reversal.",
          "Reversal Framed Off Swing Point",
          "Reversal Framed Off Swing Point",
          "H4 / H1 / M30 / M15",
          "Timeframe"
        ],
        "imageUrl": "/pdf_assets/intraday_bias/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/8)",
        "captionEn": "Detailed chart analysis diagram (Page 6/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Next Candle Model",
        "headingEn": "Next Candle Model",
        "contentVi": [
          "Next Candle Model",
          "When price respects a PD array or fails to",
          "displace over a swing high or low, the next",
          "candle can be anticipated.",
          "H4 / H1 / M30 / M15",
          "Timeframe"
        ],
        "contentEn": [
          "Next Candle Model",
          "When price respects a PD array or fails to",
          "displace over a swing high or low, the next",
          "candle can be anticipated.",
          "H4 / H1 / M30 / M15",
          "Timeframe"
        ],
        "imageUrl": "/pdf_assets/intraday_bias/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/8)",
        "captionEn": "Detailed chart analysis diagram (Page 7/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "Intraday Bias Video"
        ],
        "contentEn": [
          "Resources",
          "Intraday Bias Video"
        ],
        "imageUrl": "/pdf_assets/intraday_bias/page_8.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 8/8)",
        "captionEn": "Detailed chart analysis diagram (Page 8/8)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 8): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 8): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "Killzones.pdf": {
    "pdfFileName": "Killzones.pdf",
    "slug": "killzones",
    "totalPages": 5,
    "sections": [
      {
        "headingVi": "ICT KILLZONES",
        "headingEn": "ICT KILLZONES",
        "contentVi": [
          "ICT KILLZONES"
        ],
        "contentEn": [
          "ICT KILLZONES"
        ],
        "imageUrl": "/pdf_assets/killzones/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/5)",
        "captionEn": "Detailed chart analysis diagram (Page 1/5)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "ICT Killzones",
        "headingEn": "ICT Killzones",
        "contentVi": [
          "ICT Killzones",
          "Killzones",
          "Silver Bullet Windows"
        ],
        "contentEn": [
          "ICT Killzones",
          "Killzones",
          "Silver Bullet Windows"
        ],
        "imageUrl": "/pdf_assets/killzones/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/5)",
        "captionEn": "Detailed chart analysis diagram (Page 2/5)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Killzones",
        "headingEn": "Killzones",
        "contentVi": [
          "Killzones",
          "Asia: 20:00 – 00:00",
          "London: 02:00 – 05:00",
          "New York AM: 07:00 – 10:00",
          "London Close: 10:00 – 12:00",
          "Forex Killzones:",
          "Asia: 20:00 – 00:00",
          "London: 02:00 – 05:00",
          "New York AM: 08:30 – 11:00",
          "New York PM: 13:30 – 16:00",
          "Indices Killzones:",
          "20:00 – 00:00",
          "02:00 – 05:00",
          "07:00 – 10:00",
          "10:00 – 12:00",
          "20:00 – 00:00",
          "02:00 – 05:00",
          "08:30 – 11:00",
          "13:30 – 16:00",
          "Eastern Standard Time (EST)"
        ],
        "contentEn": [
          "Killzones",
          "Asia: 20:00 – 00:00",
          "London: 02:00 – 05:00",
          "New York AM: 07:00 – 10:00",
          "London Close: 10:00 – 12:00",
          "Forex Killzones:",
          "Asia: 20:00 – 00:00",
          "London: 02:00 – 05:00",
          "New York AM: 08:30 – 11:00",
          "New York PM: 13:30 – 16:00",
          "Indices Killzones:",
          "20:00 – 00:00",
          "02:00 – 05:00",
          "07:00 – 10:00",
          "10:00 – 12:00",
          "20:00 – 00:00",
          "02:00 – 05:00",
          "08:30 – 11:00",
          "13:30 – 16:00",
          "Eastern Standard Time (EST)"
        ],
        "imageUrl": "/pdf_assets/killzones/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/5)",
        "captionEn": "Detailed chart analysis diagram (Page 3/5)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Silver Bullet Windows",
        "headingEn": "Silver Bullet Windows",
        "contentVi": [
          "Silver Bullet Windows",
          "London SB: 03:00 – 04:00",
          "New York AM SB: 10:00 – 11:00",
          "New York PM SB: 14:00 – 15:00",
          "Silver Bullet:",
          "20:00 – 00:00",
          "02:00 – 05:00",
          "08:30 – 11:00",
          "13:30 – 16:00",
          "03:00–04:00",
          "10:00–11:00",
          "14:00–15:00",
          "Eastern Standard Time (EST)"
        ],
        "contentEn": [
          "Silver Bullet Windows",
          "London SB: 03:00 – 04:00",
          "New York AM SB: 10:00 – 11:00",
          "New York PM SB: 14:00 – 15:00",
          "Silver Bullet:",
          "20:00 – 00:00",
          "02:00 – 05:00",
          "08:30 – 11:00",
          "13:30 – 16:00",
          "03:00–04:00",
          "10:00–11:00",
          "14:00–15:00",
          "Eastern Standard Time (EST)"
        ],
        "imageUrl": "/pdf_assets/killzones/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/5)",
        "captionEn": "Detailed chart analysis diagram (Page 4/5)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "Killzones Video"
        ],
        "contentEn": [
          "Resources",
          "Killzones Video"
        ],
        "imageUrl": "/pdf_assets/killzones/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/5)",
        "captionEn": "Detailed chart analysis diagram (Page 5/5)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "Relative_Strength_ES.NQ.pdf": {
    "pdfFileName": "Relative_Strength_ES.NQ.pdf",
    "slug": "relative_strength_es_nq",
    "totalPages": 7,
    "sections": [
      {
        "headingVi": "RELATIVE STRENGTH",
        "headingEn": "RELATIVE STRENGTH",
        "contentVi": [
          "RELATIVE STRENGTH",
          "AND WEAKNESS",
          "S&P VS NASDAQ"
        ],
        "contentEn": [
          "RELATIVE STRENGTH",
          "AND WEAKNESS",
          "S&P VS NASDAQ"
        ],
        "imageUrl": "/pdf_assets/relative_strength_es_nq/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/7)",
        "captionEn": "Detailed chart analysis diagram (Page 1/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Relative Strength/Weakness",
        "headingEn": "Relative Strength/Weakness",
        "contentVi": [
          "Relative Strength/Weakness",
          "What is Relative Strength & Weakness",
          "Using SMT",
          "Using ES/NQ Chart",
          "Reversals"
        ],
        "contentEn": [
          "Relative Strength/Weakness",
          "What is Relative Strength & Weakness",
          "Using SMT",
          "Using ES/NQ Chart",
          "Reversals"
        ],
        "imageUrl": "/pdf_assets/relative_strength_es_nq/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/7)",
        "captionEn": "Detailed chart analysis diagram (Page 2/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Relative Strength/Weakness",
        "headingEn": "Relative Strength/Weakness",
        "contentVi": [
          "Relative Strength/Weakness",
          "Strength",
          "Weakness",
          "Relative Strength or Weakness is when comparing correlated",
          "assets, assessing which one is more bullish (strength) or",
          "bearish (weakness).",
          "ES or NQ Chart"
        ],
        "contentEn": [
          "Relative Strength/Weakness",
          "Strength",
          "Weakness",
          "Relative Strength or Weakness is when comparing correlated",
          "assets, assessing which one is more bullish (strength) or",
          "bearish (weakness).",
          "ES or NQ Chart"
        ],
        "imageUrl": "/pdf_assets/relative_strength_es_nq/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/7)",
        "captionEn": "Detailed chart analysis diagram (Page 3/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Using SMT",
        "headingEn": "Using SMT",
        "contentVi": [
          "Using SMT",
          "SMT can be used to show a divergence between correlated",
          "assets. This can be used to show relative strength and",
          "weakness.",
          "Relative",
          "Strength",
          "Relative",
          "Weakness",
          "ES or NQ Chart"
        ],
        "contentEn": [
          "Using SMT",
          "SMT can be used to show a divergence between correlated",
          "assets. This can be used to show relative strength and",
          "weakness.",
          "Relative",
          "Strength",
          "Relative",
          "Weakness",
          "ES or NQ Chart"
        ],
        "imageUrl": "/pdf_assets/relative_strength_es_nq/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/7)",
        "captionEn": "Detailed chart analysis diagram (Page 4/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Using ES/NQ Chart",
        "headingEn": "Using ES/NQ Chart",
        "contentVi": [
          "Using ES/NQ Chart",
          "ES/NQ :",
          "ES/NQ :",
          "ES :",
          "ES :",
          "NQ :",
          "NQ :",
          "ES/NQ :",
          "ES :",
          "NQ :",
          "ES/NQ :",
          "ES :",
          "NQ :",
          "ES/NQ Chart",
          "Relative Strength or Weakness can be determined",
          "comparing ES to NQ by charting ES1! / NQ1! on Tradingview."
        ],
        "contentEn": [
          "Using ES/NQ Chart",
          "ES/NQ :",
          "ES/NQ :",
          "ES :",
          "ES :",
          "NQ :",
          "NQ :",
          "ES/NQ :",
          "ES :",
          "NQ :",
          "ES/NQ :",
          "ES :",
          "NQ :",
          "ES/NQ Chart",
          "Relative Strength or Weakness can be determined",
          "comparing ES to NQ by charting ES1! / NQ1! on Tradingview."
        ],
        "imageUrl": "/pdf_assets/relative_strength_es_nq/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/7)",
        "captionEn": "Detailed chart analysis diagram (Page 5/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Reversals",
        "headingEn": "Reversals",
        "contentVi": [
          "Reversals",
          "My Theory is reversals on ES1!/NQ1! can be used to show",
          "the change in correlation and used to anticipate a reversal",
          "on ES or NQ and/or determine relative strength.",
          "ES/NQ Chart",
          "ES/NQ :",
          "ES :",
          "NQ :",
          "ES/NQ :",
          "ES :",
          "NQ :"
        ],
        "contentEn": [
          "Reversals",
          "My Theory is reversals on ES1!/NQ1! can be used to show",
          "the change in correlation and used to anticipate a reversal",
          "on ES or NQ and/or determine relative strength.",
          "ES/NQ Chart",
          "ES/NQ :",
          "ES :",
          "NQ :",
          "ES/NQ :",
          "ES :",
          "NQ :"
        ],
        "imageUrl": "/pdf_assets/relative_strength_es_nq/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/7)",
        "captionEn": "Detailed chart analysis diagram (Page 6/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "Relative Strength / Weakness Video"
        ],
        "contentEn": [
          "Resources",
          "Relative Strength / Weakness Video"
        ],
        "imageUrl": "/pdf_assets/relative_strength_es_nq/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/7)",
        "captionEn": "Detailed chart analysis diagram (Page 7/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "SMT.pdf": {
    "pdfFileName": "SMT.pdf",
    "slug": "smt",
    "totalPages": 12,
    "sections": [
      {
        "headingVi": "SMART MONEY",
        "headingEn": "SMART MONEY",
        "contentVi": [
          "SMART MONEY",
          "TECHNIQUES",
          "(SMT)"
        ],
        "contentEn": [
          "SMART MONEY",
          "TECHNIQUES",
          "(SMT)"
        ],
        "imageUrl": "/pdf_assets/smt/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/12)",
        "captionEn": "Detailed chart analysis diagram (Page 1/12)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "SMT",
        "headingEn": "SMT",
        "contentVi": [
          "SMT",
          "Correlated Pairs – Bullish",
          "Correlated Pairs – Bullish SMT",
          "Correlated Pairs – Bearish",
          "Correlated Pairs – Bearish SMT",
          "Inversely Correlated Pairs",
          "Inversely Correlated Pairs SMT"
        ],
        "contentEn": [
          "SMT",
          "Correlated Pairs – Bullish",
          "Correlated Pairs – Bullish SMT",
          "Correlated Pairs – Bearish",
          "Correlated Pairs – Bearish SMT",
          "Inversely Correlated Pairs",
          "Inversely Correlated Pairs SMT"
        ],
        "imageUrl": "/pdf_assets/smt/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/12)",
        "captionEn": "Detailed chart analysis diagram (Page 2/12)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Correlated Pairs - Bullish",
        "headingEn": "Correlated Pairs - Bullish",
        "contentVi": [
          "Correlated Pairs - Bullish",
          "Low",
          "Higher Low",
          "Low",
          "Higher Low"
        ],
        "contentEn": [
          "Correlated Pairs - Bullish",
          "Low",
          "Higher Low",
          "Low",
          "Higher Low"
        ],
        "imageUrl": "/pdf_assets/smt/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/12)",
        "captionEn": "Detailed chart analysis diagram (Page 3/12)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Correlated Pairs – Bullish SMT",
        "headingEn": "Correlated Pairs – Bullish SMT",
        "contentVi": [
          "Correlated Pairs – Bullish SMT",
          "Low",
          "Lower Low",
          "Low",
          "Higher Low"
        ],
        "contentEn": [
          "Correlated Pairs – Bullish SMT",
          "Low",
          "Lower Low",
          "Low",
          "Higher Low"
        ],
        "imageUrl": "/pdf_assets/smt/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/12)",
        "captionEn": "Detailed chart analysis diagram (Page 4/12)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Correlated Pairs – Bullish SMT",
        "headingEn": "Correlated Pairs – Bullish SMT",
        "contentVi": [
          "Correlated Pairs – Bullish SMT"
        ],
        "contentEn": [
          "Correlated Pairs – Bullish SMT"
        ],
        "imageUrl": "/pdf_assets/smt/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/12)",
        "captionEn": "Detailed chart analysis diagram (Page 5/12)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Correlated Pairs - Bearish",
        "headingEn": "Correlated Pairs - Bearish",
        "contentVi": [
          "Correlated Pairs - Bearish",
          "High",
          "Lower High",
          "High",
          "Lower High"
        ],
        "contentEn": [
          "Correlated Pairs - Bearish",
          "High",
          "Lower High",
          "High",
          "Lower High"
        ],
        "imageUrl": "/pdf_assets/smt/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/12)",
        "captionEn": "Detailed chart analysis diagram (Page 6/12)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Correlated Pairs – Bearish SMT",
        "headingEn": "Correlated Pairs – Bearish SMT",
        "contentVi": [
          "Correlated Pairs – Bearish SMT",
          "High",
          "Higher High",
          "High",
          "Lower High"
        ],
        "contentEn": [
          "Correlated Pairs – Bearish SMT",
          "High",
          "Higher High",
          "High",
          "Lower High"
        ],
        "imageUrl": "/pdf_assets/smt/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/12)",
        "captionEn": "Detailed chart analysis diagram (Page 7/12)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Correlated Pairs – Bearish SMT",
        "headingEn": "Correlated Pairs – Bearish SMT",
        "contentVi": [
          "Correlated Pairs – Bearish SMT"
        ],
        "contentEn": [
          "Correlated Pairs – Bearish SMT"
        ],
        "imageUrl": "/pdf_assets/smt/page_8.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 8/12)",
        "captionEn": "Detailed chart analysis diagram (Page 8/12)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 8): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 8): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Inversely Correlated Pairs",
        "headingEn": "Inversely Correlated Pairs",
        "contentVi": [
          "Inversely Correlated Pairs",
          "Lower High",
          "High",
          "High",
          "Higher High",
          "Low",
          "Lower Low",
          "Low",
          "Higher low"
        ],
        "contentEn": [
          "Inversely Correlated Pairs",
          "Lower High",
          "High",
          "High",
          "Higher High",
          "Low",
          "Lower Low",
          "Low",
          "Higher low"
        ],
        "imageUrl": "/pdf_assets/smt/page_9.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 9/12)",
        "captionEn": "Detailed chart analysis diagram (Page 9/12)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 9): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 9): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Inversely Correlated Pairs SMT",
        "headingEn": "Inversely Correlated Pairs SMT",
        "contentVi": [
          "Inversely Correlated Pairs SMT",
          "Lower High",
          "High",
          "High",
          "Higher High",
          "Low",
          "Higher Low",
          "Low",
          "Lower Low"
        ],
        "contentEn": [
          "Inversely Correlated Pairs SMT",
          "Lower High",
          "High",
          "High",
          "Higher High",
          "Low",
          "Higher Low",
          "Low",
          "Lower Low"
        ],
        "imageUrl": "/pdf_assets/smt/page_10.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 10/12)",
        "captionEn": "Detailed chart analysis diagram (Page 10/12)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 10): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 10): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Inversely Correlated Pairs SMT",
        "headingEn": "Inversely Correlated Pairs SMT",
        "contentVi": [
          "Inversely Correlated Pairs SMT"
        ],
        "contentEn": [
          "Inversely Correlated Pairs SMT"
        ],
        "imageUrl": "/pdf_assets/smt/page_11.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 11/12)",
        "captionEn": "Detailed chart analysis diagram (Page 11/12)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 11): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 11): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "SMT Video"
        ],
        "contentEn": [
          "Resources",
          "SMT Video"
        ],
        "imageUrl": "/pdf_assets/smt/page_12.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 12/12)",
        "captionEn": "Detailed chart analysis diagram (Page 12/12)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 12): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 12): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "CISD.pdf": {
    "pdfFileName": "CISD.pdf",
    "slug": "cisd",
    "totalPages": 5,
    "sections": [
      {
        "headingVi": "CHANGE IN STATE",
        "headingEn": "CHANGE IN STATE",
        "contentVi": [
          "CHANGE IN STATE",
          "OF DELIVERY",
          "(CISD)"
        ],
        "contentEn": [
          "CHANGE IN STATE",
          "OF DELIVERY",
          "(CISD)"
        ],
        "imageUrl": "/pdf_assets/cisd/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/5)",
        "captionEn": "Detailed chart analysis diagram (Page 1/5)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "CISD",
        "headingEn": "CISD",
        "contentVi": [
          "CISD",
          "CISD"
        ],
        "contentEn": [
          "CISD",
          "CISD"
        ],
        "imageUrl": "/pdf_assets/cisd/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/5)",
        "captionEn": "Detailed chart analysis diagram (Page 2/5)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "CISD",
        "headingEn": "CISD",
        "contentVi": [
          "CISD",
          "CISD",
          "Important Level",
          "CISD",
          "Important Level"
        ],
        "contentEn": [
          "CISD",
          "CISD",
          "Important Level",
          "CISD",
          "Important Level"
        ],
        "imageUrl": "/pdf_assets/cisd/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/5)",
        "captionEn": "Detailed chart analysis diagram (Page 3/5)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "CISD",
        "headingEn": "CISD",
        "contentVi": [
          "CISD",
          "CISD",
          "Important Level",
          "CISD",
          "Important Level"
        ],
        "contentEn": [
          "CISD",
          "CISD",
          "Important Level",
          "CISD",
          "Important Level"
        ],
        "imageUrl": "/pdf_assets/cisd/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/5)",
        "captionEn": "Detailed chart analysis diagram (Page 4/5)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "CISD Video"
        ],
        "contentEn": [
          "Resources",
          "CISD Video"
        ],
        "imageUrl": "/pdf_assets/cisd/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/5)",
        "captionEn": "Detailed chart analysis diagram (Page 5/5)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "Market_Structure_Shift.pdf": {
    "pdfFileName": "Market_Structure_Shift.pdf",
    "slug": "market_structure_shift",
    "totalPages": 6,
    "sections": [
      {
        "headingVi": "MARKET STRUCTURE",
        "headingEn": "MARKET STRUCTURE",
        "contentVi": [
          "MARKET STRUCTURE",
          "SHIFT"
        ],
        "contentEn": [
          "MARKET STRUCTURE",
          "SHIFT"
        ],
        "imageUrl": "/pdf_assets/market_structure_shift/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/6)",
        "captionEn": "Detailed chart analysis diagram (Page 1/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Dịch chuyển cấu trúc thị trường (MSS)",
        "headingEn": "Market Structure Shift",
        "contentVi": [
          "Dịch chuyển cấu trúc thị trường (MSS)",
          "Chuyển động nến thân lớn mở rộng (Displacement)",
          "Dịch chuyển cấu trúc thị trường (MSS)",
          "Higher Time Frame Level"
        ],
        "contentEn": [
          "Market Structure Shift",
          "Displacement",
          "Market Structure Shift",
          "Higher Time Frame Level"
        ],
        "imageUrl": "/pdf_assets/market_structure_shift/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/6)",
        "captionEn": "Detailed chart analysis diagram (Page 2/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Chuyển động nến thân lớn mở rộng (Displacement)",
        "headingEn": "Displacement",
        "contentVi": [
          "Chuyển động nến thân lớn mở rộng (Displacement)",
          "Chuyển động nến thân lớn mở rộng (Displacement) is an aggressive move with",
          "full-bodied candles.",
          "This can form in a single candle or in",
          "multiple candles.",
          "Generally, Chuyển động nến thân lớn mở rộng (Displacement) candle(s) have FVG",
          "present."
        ],
        "contentEn": [
          "Displacement",
          "Displacement is an aggressive move with",
          "full-bodied candles.",
          "This can form in a single candle or in",
          "multiple candles.",
          "Generally, displacement candle(s) have FVG",
          "present."
        ],
        "imageUrl": "/pdf_assets/market_structure_shift/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/6)",
        "captionEn": "Detailed chart analysis diagram (Page 3/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Dịch chuyển cấu trúc thị trường (MSS)",
        "headingEn": "Market Structure Shift",
        "contentVi": [
          "Dịch chuyển cấu trúc thị trường (MSS)",
          "When Chuyển động nến thân lớn mở rộng (Displacement) occurs over or below a",
          "swing high or low, a Dịch chuyển cấu trúc thị trường (MSS)",
          "happens.",
          "Having bodies close over/below previous structure is preferred.",
          "A stop raid before the MSS is preferred.",
          "A Dịch chuyển cấu trúc thị trường (MSS) (MSS) indicates a",
          "change in trend from bullish to bearish or",
          "bearish to bullish.",
          "Dịch chuyển cấu trúc thị trường (MSS)"
        ],
        "contentEn": [
          "Market Structure Shift",
          "When displacement occurs over or below a",
          "swing high or low, a market structure shift",
          "happens.",
          "Having bodies close over/below previous structure is preferred.",
          "A stop raid before the MSS is preferred.",
          "A market structure shift (MSS) indicates a",
          "change in trend from bullish to bearish or",
          "bearish to bullish.",
          "Market Structure Shift"
        ],
        "imageUrl": "/pdf_assets/market_structure_shift/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/6)",
        "captionEn": "Detailed chart analysis diagram (Page 4/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Higher Time Frame Level",
        "headingEn": "Higher Time Frame Level",
        "contentVi": [
          "Higher Time Frame Level",
          "It is important that a higher time frame level",
          "is engaged prior to the lower time frame",
          "Dịch chuyển cấu trúc thị trường (MSS).",
          "Higher Time Frame Level"
        ],
        "contentEn": [
          "Higher Time Frame Level",
          "It is important that a higher time frame level",
          "is engaged prior to the lower time frame",
          "market structure shift.",
          "Higher Time Frame Level"
        ],
        "imageUrl": "/pdf_assets/market_structure_shift/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/6)",
        "captionEn": "Detailed chart analysis diagram (Page 5/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "Dịch chuyển cấu trúc thị trường (MSS) Video"
        ],
        "contentEn": [
          "Resources",
          "Market Structure Shift Video"
        ],
        "imageUrl": "/pdf_assets/market_structure_shift/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/6)",
        "captionEn": "Detailed chart analysis diagram (Page 6/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "MSS_vs_CISD.pdf": {
    "pdfFileName": "MSS_vs_CISD.pdf",
    "slug": "mss_vs_cisd",
    "totalPages": 7,
    "sections": [
      {
        "headingVi": "MSS vs CISD",
        "headingEn": "MSS vs CISD",
        "contentVi": [
          "MSS vs CISD"
        ],
        "contentEn": [
          "MSS vs CISD"
        ],
        "imageUrl": "/pdf_assets/mss_vs_cisd/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/7)",
        "captionEn": "Detailed chart analysis diagram (Page 1/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "MSS vs CISD",
        "headingEn": "MSS vs CISD",
        "contentVi": [
          "MSS vs CISD",
          "Dịch chuyển cấu trúc thị trường (MSS)",
          "Thay đổi trạng thái giao giá (CISD)",
          "Comparison",
          "Inversion"
        ],
        "contentEn": [
          "MSS vs CISD",
          "Market Structure Shift",
          "Change In State Of Delivery",
          "Comparison",
          "Inversion"
        ],
        "imageUrl": "/pdf_assets/mss_vs_cisd/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/7)",
        "captionEn": "Detailed chart analysis diagram (Page 2/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Dịch chuyển cấu trúc thị trường (MSS)",
        "headingEn": "Market Structure Shift",
        "contentVi": [
          "Dịch chuyển cấu trúc thị trường (MSS)",
          "Dịch chuyển cấu trúc thị trường (MSS)"
        ],
        "contentEn": [
          "Market Structure Shift",
          "Market Structure Shift"
        ],
        "imageUrl": "/pdf_assets/mss_vs_cisd/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/7)",
        "captionEn": "Detailed chart analysis diagram (Page 3/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "CISD",
        "headingEn": "CISD",
        "contentVi": [
          "CISD",
          "CISD",
          "Important Level",
          "CISD",
          "Important Level"
        ],
        "contentEn": [
          "CISD",
          "CISD",
          "Important Level",
          "CISD",
          "Important Level"
        ],
        "imageUrl": "/pdf_assets/mss_vs_cisd/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/7)",
        "captionEn": "Detailed chart analysis diagram (Page 4/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Comparison",
        "headingEn": "Comparison",
        "contentVi": [
          "Comparison",
          "CISD",
          "Important Level",
          "CISD",
          "Important Level",
          "Dịch chuyển cấu trúc thị trường (MSS)",
          "Dịch chuyển cấu trúc thị trường (MSS)"
        ],
        "contentEn": [
          "Comparison",
          "CISD",
          "Important Level",
          "CISD",
          "Important Level",
          "Market Structure Shift",
          "Market Structure Shift"
        ],
        "imageUrl": "/pdf_assets/mss_vs_cisd/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/7)",
        "captionEn": "Detailed chart analysis diagram (Page 5/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Inversion",
        "headingEn": "Inversion",
        "contentVi": [
          "Inversion"
        ],
        "contentEn": [
          "Inversion"
        ],
        "imageUrl": "/pdf_assets/mss_vs_cisd/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/7)",
        "captionEn": "Detailed chart analysis diagram (Page 6/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "MSS vs CISD Video"
        ],
        "contentEn": [
          "Resources",
          "MSS vs CISD Video"
        ],
        "imageUrl": "/pdf_assets/mss_vs_cisd/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/7)",
        "captionEn": "Detailed chart analysis diagram (Page 7/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "MSS_vs_Liquidity_Grab.pdf": {
    "pdfFileName": "MSS_vs_Liquidity_Grab.pdf",
    "slug": "mss_vs_liquidity_grab",
    "totalPages": 7,
    "sections": [
      {
        "headingVi": "MSS VS LIQUIDITY GRAB",
        "headingEn": "MSS VS LIQUIDITY GRAB",
        "contentVi": [
          "MSS VS LIQUIDITY GRAB"
        ],
        "contentEn": [
          "MSS VS LIQUIDITY GRAB"
        ],
        "imageUrl": "/pdf_assets/mss_vs_liquidity_grab/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/7)",
        "captionEn": "Detailed chart analysis diagram (Page 1/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "MSS vs Liquidity Grab",
        "headingEn": "MSS vs Liquidity Grab",
        "contentVi": [
          "MSS vs Liquidity Grab",
          "Chuyển động nến thân lớn mở rộng (Displacement)",
          "Dịch chuyển cấu trúc thị trường (MSS)",
          "Liquidity Grab",
          "Example"
        ],
        "contentEn": [
          "MSS vs Liquidity Grab",
          "Displacement",
          "Market Structure Shift",
          "Liquidity Grab",
          "Example"
        ],
        "imageUrl": "/pdf_assets/mss_vs_liquidity_grab/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/7)",
        "captionEn": "Detailed chart analysis diagram (Page 2/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Chuyển động nến thân lớn mở rộng (Displacement)",
        "headingEn": "Displacement",
        "contentVi": [
          "Chuyển động nến thân lớn mở rộng (Displacement)",
          "Chuyển động nến thân lớn mở rộng (Displacement) is an aggressive move with",
          "full-bodied candles.",
          "This can form in a single candle or in",
          "multiple candles.",
          "Generally, Chuyển động nến thân lớn mở rộng (Displacement) candle(s) have FVG",
          "present."
        ],
        "contentEn": [
          "Displacement",
          "Displacement is an aggressive move with",
          "full-bodied candles.",
          "This can form in a single candle or in",
          "multiple candles.",
          "Generally, displacement candle(s) have FVG",
          "present."
        ],
        "imageUrl": "/pdf_assets/mss_vs_liquidity_grab/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/7)",
        "captionEn": "Detailed chart analysis diagram (Page 3/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Dịch chuyển cấu trúc thị trường (MSS)",
        "headingEn": "Market Structure Shift",
        "contentVi": [
          "Dịch chuyển cấu trúc thị trường (MSS)",
          "When Chuyển động nến thân lớn mở rộng (Displacement) occurs over or below a",
          "swing high or low, a Dịch chuyển cấu trúc thị trường (MSS)",
          "occurs.",
          "Having bodies close over/below previous structure is preferred.",
          "A stop raid before the MSS is preferred.",
          "A Dịch chuyển cấu trúc thị trường (MSS) (MSS) indicates a",
          "change in trend from bullish to bearish or",
          "bearish to bullish.",
          "MSS PDF",
          "Dịch chuyển cấu trúc thị trường (MSS)"
        ],
        "contentEn": [
          "Market Structure Shift",
          "When displacement occurs over or below a",
          "swing high or low, a market structure shift",
          "occurs.",
          "Having bodies close over/below previous structure is preferred.",
          "A stop raid before the MSS is preferred.",
          "A market structure shift (MSS) indicates a",
          "change in trend from bullish to bearish or",
          "bearish to bullish.",
          "MSS PDF",
          "Market Structure Shift"
        ],
        "imageUrl": "/pdf_assets/mss_vs_liquidity_grab/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/7)",
        "captionEn": "Detailed chart analysis diagram (Page 4/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Liquidity Grab",
        "headingEn": "Liquidity Grab",
        "contentVi": [
          "Liquidity Grab",
          "When there is lack of Chuyển động nến thân lớn mở rộng (Displacement) over or",
          "below a swing high or low, a liquidity grab",
          "occurs.",
          "Having bodies fail to close over/below previous structure is preferred.",
          "A liquidity grab indicates a failure to",
          "continue in one direction.",
          "Failure to displace over previous high",
          "Failure to displace below previous low"
        ],
        "contentEn": [
          "Liquidity Grab",
          "When there is lack of displacement over or",
          "below a swing high or low, a liquidity grab",
          "occurs.",
          "Having bodies fail to close over/below previous structure is preferred.",
          "A liquidity grab indicates a failure to",
          "continue in one direction.",
          "Failure to displace over previous high",
          "Failure to displace below previous low"
        ],
        "imageUrl": "/pdf_assets/mss_vs_liquidity_grab/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/7)",
        "captionEn": "Detailed chart analysis diagram (Page 5/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Example",
        "headingEn": "Example",
        "contentVi": [
          "Example",
          "Failure To Displace",
          "Chuyển động nến thân lớn mở rộng (Displacement)"
        ],
        "contentEn": [
          "Example",
          "Failure To Displace",
          "Displacement"
        ],
        "imageUrl": "/pdf_assets/mss_vs_liquidity_grab/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/7)",
        "captionEn": "Detailed chart analysis diagram (Page 6/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "MSS vs Liquidity Grab Video"
        ],
        "contentEn": [
          "Resources",
          "MSS vs Liquidity Grab Video"
        ],
        "imageUrl": "/pdf_assets/mss_vs_liquidity_grab/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/7)",
        "captionEn": "Detailed chart analysis diagram (Page 7/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "BreakerBlocks.pdf": {
    "pdfFileName": "BreakerBlocks.pdf",
    "slug": "breakerblocks",
    "totalPages": 20,
    "sections": [
      {
        "headingVi": "BREAKER BLOCKS",
        "headingEn": "BREAKER BLOCKS",
        "contentVi": [
          "BREAKER BLOCKS"
        ],
        "contentEn": [
          "BREAKER BLOCKS"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/20)",
        "captionEn": "Detailed chart analysis diagram (Page 1/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Breaker Blocks",
        "headingEn": "Breaker Blocks",
        "contentVi": [
          "Breaker Blocks",
          "Fair Value Gaps",
          "Breaker Blocks",
          "Unicorn"
        ],
        "contentEn": [
          "Breaker Blocks",
          "Fair Value Gaps",
          "Breaker Blocks",
          "Unicorn"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/20)",
        "captionEn": "Detailed chart analysis diagram (Page 2/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Bullish Khối Breaker Block",
        "headingEn": "Bullish Breaker Block",
        "contentVi": [
          "Bullish Khối Breaker Block"
        ],
        "contentEn": [
          "Bullish Breaker Block"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/20)",
        "captionEn": "Detailed chart analysis diagram (Page 3/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Bullish Khối Breaker Block",
        "headingEn": "Bullish Breaker Block",
        "contentVi": [
          "Bullish Khối Breaker Block",
          "Low"
        ],
        "contentEn": [
          "Bullish Breaker Block",
          "Low"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/20)",
        "captionEn": "Detailed chart analysis diagram (Page 4/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Bullish Khối Breaker Block",
        "headingEn": "Bullish Breaker Block",
        "contentVi": [
          "Bullish Khối Breaker Block",
          "Low",
          "High"
        ],
        "contentEn": [
          "Bullish Breaker Block",
          "Low",
          "High"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/20)",
        "captionEn": "Detailed chart analysis diagram (Page 5/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Bullish Khối Breaker Block",
        "headingEn": "Bullish Breaker Block",
        "contentVi": [
          "Bullish Khối Breaker Block",
          "Low",
          "High",
          "Lower Low"
        ],
        "contentEn": [
          "Bullish Breaker Block",
          "Low",
          "High",
          "Lower Low"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/20)",
        "captionEn": "Detailed chart analysis diagram (Page 6/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Bullish Khối Breaker Block",
        "headingEn": "Bullish Breaker Block",
        "contentVi": [
          "Bullish Khối Breaker Block",
          "Low",
          "High",
          "Lower Low",
          "Higher High"
        ],
        "contentEn": [
          "Bullish Breaker Block",
          "Low",
          "High",
          "Lower Low",
          "Higher High"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/20)",
        "captionEn": "Detailed chart analysis diagram (Page 7/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Bullish Khối Breaker Block",
        "headingEn": "Bullish Breaker Block",
        "contentVi": [
          "Bullish Khối Breaker Block",
          "Low",
          "High",
          "Lower Low",
          "Higher High"
        ],
        "contentEn": [
          "Bullish Breaker Block",
          "Low",
          "High",
          "Lower Low",
          "Higher High"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_8.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 8/20)",
        "captionEn": "Detailed chart analysis diagram (Page 8/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 8): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 8): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Bullish Khối Breaker Block",
        "headingEn": "Bullish Breaker Block",
        "contentVi": [
          "Bullish Khối Breaker Block",
          "Low",
          "High",
          "Lower Low",
          "Higher High"
        ],
        "contentEn": [
          "Bullish Breaker Block",
          "Low",
          "High",
          "Lower Low",
          "Higher High"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_9.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 9/20)",
        "captionEn": "Detailed chart analysis diagram (Page 9/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 9): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 9): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Bearish Khối Breaker Block",
        "headingEn": "Bearish Breaker Block",
        "contentVi": [
          "Bearish Khối Breaker Block",
          "High"
        ],
        "contentEn": [
          "Bearish Breaker Block",
          "High"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_10.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 10/20)",
        "captionEn": "Detailed chart analysis diagram (Page 10/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 10): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 10): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Bearish Khối Breaker Block",
        "headingEn": "Bearish Breaker Block",
        "contentVi": [
          "Bearish Khối Breaker Block",
          "High",
          "Low"
        ],
        "contentEn": [
          "Bearish Breaker Block",
          "High",
          "Low"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_11.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 11/20)",
        "captionEn": "Detailed chart analysis diagram (Page 11/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 11): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 11): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Bearish Khối Breaker Block",
        "headingEn": "Bearish Breaker Block",
        "contentVi": [
          "Bearish Khối Breaker Block",
          "High",
          "Low",
          "Higher High"
        ],
        "contentEn": [
          "Bearish Breaker Block",
          "High",
          "Low",
          "Higher High"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_12.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 12/20)",
        "captionEn": "Detailed chart analysis diagram (Page 12/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 12): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 12): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Bearish Khối Breaker Block",
        "headingEn": "Bearish Breaker Block",
        "contentVi": [
          "Bearish Khối Breaker Block",
          "High",
          "Low",
          "Higher High",
          "Lower Low"
        ],
        "contentEn": [
          "Bearish Breaker Block",
          "High",
          "Low",
          "Higher High",
          "Lower Low"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_13.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 13/20)",
        "captionEn": "Detailed chart analysis diagram (Page 13/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 13): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 13): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Bearish Khối Breaker Block",
        "headingEn": "Bearish Breaker Block",
        "contentVi": [
          "Bearish Khối Breaker Block",
          "High",
          "Low",
          "Higher High",
          "Lower Low"
        ],
        "contentEn": [
          "Bearish Breaker Block",
          "High",
          "Low",
          "Higher High",
          "Lower Low"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_14.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 14/20)",
        "captionEn": "Detailed chart analysis diagram (Page 14/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 14): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 14): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Bearish Khối Breaker Block",
        "headingEn": "Bearish Breaker Block",
        "contentVi": [
          "Bearish Khối Breaker Block",
          "High",
          "Low",
          "Higher High",
          "Lower Low"
        ],
        "contentEn": [
          "Bearish Breaker Block",
          "High",
          "Low",
          "Higher High",
          "Lower Low"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_15.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 15/20)",
        "captionEn": "Detailed chart analysis diagram (Page 15/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 15): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 15): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Fair Value Gaps",
        "headingEn": "Fair Value Gaps",
        "contentVi": [
          "Fair Value Gaps",
          "Bearish",
          "Khoảng trống giá FVG",
          "Bullish",
          "Khoảng trống giá FVG"
        ],
        "contentEn": [
          "Fair Value Gaps",
          "Bearish",
          "Fair Value Gap",
          "Bullish",
          "Fair Value Gap"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_16.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 16/20)",
        "captionEn": "Detailed chart analysis diagram (Page 16/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 16): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 16): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Unicorn Model",
        "headingEn": "Unicorn Model",
        "contentVi": [
          "Unicorn Model"
        ],
        "contentEn": [
          "Unicorn Model"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_17.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 17/20)",
        "captionEn": "Detailed chart analysis diagram (Page 17/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 17): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 17): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Stop Losses",
        "headingEn": "Stop Losses",
        "contentVi": [
          "Stop Losses"
        ],
        "contentEn": [
          "Stop Losses"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_18.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 18/20)",
        "captionEn": "Detailed chart analysis diagram (Page 18/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 18): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 18): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "OB vs BB",
        "headingEn": "OB vs BB",
        "contentVi": [
          "OB vs BB"
        ],
        "contentEn": [
          "OB vs BB"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_19.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 19/20)",
        "captionEn": "Detailed chart analysis diagram (Page 19/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 19): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 19): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "Breaker Video"
        ],
        "contentEn": [
          "Resources",
          "Breaker Video"
        ],
        "imageUrl": "/pdf_assets/breakerblocks/page_20.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 20/20)",
        "captionEn": "Detailed chart analysis diagram (Page 20/20)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 20): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 20): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "Fair_Value_Gaps.pdf": {
    "pdfFileName": "Fair_Value_Gaps.pdf",
    "slug": "fair_value_gaps",
    "totalPages": 9,
    "sections": [
      {
        "headingVi": "FAIR VALUE GAPS",
        "headingEn": "FAIR VALUE GAPS",
        "contentVi": [
          "FAIR VALUE GAPS"
        ],
        "contentEn": [
          "FAIR VALUE GAPS"
        ],
        "imageUrl": "/pdf_assets/fair_value_gaps/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/9)",
        "captionEn": "Detailed chart analysis diagram (Page 1/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Fair Value Gaps",
        "headingEn": "Fair Value Gaps",
        "contentVi": [
          "Fair Value Gaps",
          "Fair Value Gaps",
          "SIBI & BISI",
          "VI & Opening Gap",
          "Entries",
          "Stop Losses",
          "Inversion"
        ],
        "contentEn": [
          "Fair Value Gaps",
          "Fair Value Gaps",
          "SIBI & BISI",
          "VI & Opening Gap",
          "Entries",
          "Stop Losses",
          "Inversion"
        ],
        "imageUrl": "/pdf_assets/fair_value_gaps/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/9)",
        "captionEn": "Detailed chart analysis diagram (Page 2/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Fair Value Gaps",
        "headingEn": "Fair Value Gaps",
        "contentVi": [
          "Fair Value Gaps",
          "Fair value gaps (FVG) are a three-candlestick",
          "pattern where the high/low of the candle(1)",
          "does not overlap the low/high of candle(3).",
          "The low of candle(1)",
          "does not overlap with",
          "the high of candle(3)."
        ],
        "contentEn": [
          "Fair Value Gaps",
          "Fair value gaps (FVG) are a three-candlestick",
          "pattern where the high/low of the candle(1)",
          "does not overlap the low/high of candle(3).",
          "The low of candle(1)",
          "does not overlap with",
          "the high of candle(3)."
        ],
        "imageUrl": "/pdf_assets/fair_value_gaps/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/9)",
        "captionEn": "Detailed chart analysis diagram (Page 3/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "SIBI & BISI",
        "headingEn": "SIBI & BISI",
        "contentVi": [
          "SIBI & BISI",
          "SIBI: Sellside imbalance buyside inefficiency",
          "This is a bearish FVG.",
          "Price offered sellside and made an",
          "imbalance. This leaves buyside inefficient.",
          "Candle(1) low does not overlap with",
          "Candle(3) high.",
          "BISI: Buyside imbalance sellside inefficiency",
          "This is a bullish FVG.",
          "Price offered buyside and made an",
          "imbalance. This leaves sellside inefficient.",
          "Candle(1) high does not overlap with",
          "Candle(3) low."
        ],
        "contentEn": [
          "SIBI & BISI",
          "SIBI: Sellside imbalance buyside inefficiency",
          "This is a bearish FVG.",
          "Price offered sellside and made an",
          "imbalance. This leaves buyside inefficient.",
          "Candle(1) low does not overlap with",
          "Candle(3) high.",
          "BISI: Buyside imbalance sellside inefficiency",
          "This is a bullish FVG.",
          "Price offered buyside and made an",
          "imbalance. This leaves sellside inefficient.",
          "Candle(1) high does not overlap with",
          "Candle(3) low."
        ],
        "imageUrl": "/pdf_assets/fair_value_gaps/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/9)",
        "captionEn": "Detailed chart analysis diagram (Page 4/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "VI & Opening Gap",
        "headingEn": "VI & Opening Gap",
        "contentVi": [
          "VI & Opening Gap",
          "Khoảng trống giá FVG",
          "Opening Gap",
          "Volume Imbalance"
        ],
        "contentEn": [
          "VI & Opening Gap",
          "Fair Value Gap",
          "Opening Gap",
          "Volume Imbalance"
        ],
        "imageUrl": "/pdf_assets/fair_value_gaps/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/9)",
        "captionEn": "Detailed chart analysis diagram (Page 5/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Entries",
        "headingEn": "Entries",
        "contentVi": [
          "Entries",
          "IOFED",
          "FVG Fill",
          "Consequent Encroachment (mốc 50% CE của FVG)",
          "Entry",
          "Entry",
          "0.5",
          "Entry"
        ],
        "contentEn": [
          "Entries",
          "IOFED",
          "FVG Fill",
          "Consequent Encroachment",
          "Entry",
          "Entry",
          "0.5",
          "Entry"
        ],
        "imageUrl": "/pdf_assets/fair_value_gaps/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/9)",
        "captionEn": "Detailed chart analysis diagram (Page 6/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Stop Losses",
        "headingEn": "Stop Losses",
        "contentVi": [
          "Stop Losses",
          "FVG End",
          "Swing",
          "Khối lệnh Order Block (OB)",
          "Stop",
          "Stop",
          "Stop"
        ],
        "contentEn": [
          "Stop Losses",
          "FVG End",
          "Swing",
          "Order Block",
          "Stop",
          "Stop",
          "Stop"
        ],
        "imageUrl": "/pdf_assets/fair_value_gaps/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/9)",
        "captionEn": "Detailed chart analysis diagram (Page 7/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Inversion",
        "headingEn": "Inversion",
        "contentVi": [
          "Inversion",
          "A SIBI used as support on the",
          "buyside of the curve.",
          "A BISI used as resistance on the",
          "sellside of the curve."
        ],
        "contentEn": [
          "Inversion",
          "A SIBI used as support on the",
          "buyside of the curve.",
          "A BISI used as resistance on the",
          "sellside of the curve."
        ],
        "imageUrl": "/pdf_assets/fair_value_gaps/page_8.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 8/9)",
        "captionEn": "Detailed chart analysis diagram (Page 8/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 8): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 8): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources"
        ],
        "contentEn": [
          "Resources"
        ],
        "imageUrl": "/pdf_assets/fair_value_gaps/page_9.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 9/9)",
        "captionEn": "Detailed chart analysis diagram (Page 9/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 9): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 9): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "Inversion.pdf": {
    "pdfFileName": "Inversion.pdf",
    "slug": "inversion",
    "totalPages": 17,
    "sections": [
      {
        "headingVi": "INVERSION",
        "headingEn": "INVERSION",
        "contentVi": [
          "INVERSION"
        ],
        "contentEn": [
          "INVERSION"
        ],
        "imageUrl": "/pdf_assets/inversion/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/17)",
        "captionEn": "Detailed chart analysis diagram (Page 1/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Inversion",
        "headingEn": "Inversion",
        "contentVi": [
          "Inversion",
          "Fair Value Gaps",
          "Inversion",
          "Consequent Encroachment (mốc 50% CE của FVG)",
          "Old SIBI / BISI"
        ],
        "contentEn": [
          "Inversion",
          "Fair Value Gaps",
          "Inversion",
          "Consequent Encroachment",
          "Old SIBI / BISI"
        ],
        "imageUrl": "/pdf_assets/inversion/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/17)",
        "captionEn": "Detailed chart analysis diagram (Page 2/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Fair Value Gaps",
        "headingEn": "Fair Value Gaps",
        "contentVi": [
          "Fair Value Gaps"
        ],
        "contentEn": [
          "Fair Value Gaps"
        ],
        "imageUrl": "/pdf_assets/inversion/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/17)",
        "captionEn": "Detailed chart analysis diagram (Page 3/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Inversion",
        "headingEn": "Inversion",
        "contentVi": [
          "Inversion"
        ],
        "contentEn": [
          "Inversion"
        ],
        "imageUrl": "/pdf_assets/inversion/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/17)",
        "captionEn": "Detailed chart analysis diagram (Page 4/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Inversion",
        "headingEn": "Inversion",
        "contentVi": [
          "Inversion"
        ],
        "contentEn": [
          "Inversion"
        ],
        "imageUrl": "/pdf_assets/inversion/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/17)",
        "captionEn": "Detailed chart analysis diagram (Page 5/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Inversion",
        "headingEn": "Inversion",
        "contentVi": [
          "Inversion"
        ],
        "contentEn": [
          "Inversion"
        ],
        "imageUrl": "/pdf_assets/inversion/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/17)",
        "captionEn": "Detailed chart analysis diagram (Page 6/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Inversion",
        "headingEn": "Inversion",
        "contentVi": [
          "Inversion"
        ],
        "contentEn": [
          "Inversion"
        ],
        "imageUrl": "/pdf_assets/inversion/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/17)",
        "captionEn": "Detailed chart analysis diagram (Page 7/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Inversion",
        "headingEn": "Inversion",
        "contentVi": [
          "Inversion"
        ],
        "contentEn": [
          "Inversion"
        ],
        "imageUrl": "/pdf_assets/inversion/page_8.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 8/17)",
        "captionEn": "Detailed chart analysis diagram (Page 8/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 8): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 8): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Consequent Encroachment (mốc 50% CE của FVG)",
        "headingEn": "Consequent Encroachment",
        "contentVi": [
          "Consequent Encroachment (mốc 50% CE của FVG)",
          "0.5"
        ],
        "contentEn": [
          "Consequent Encroachment",
          "0.5"
        ],
        "imageUrl": "/pdf_assets/inversion/page_9.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 9/17)",
        "captionEn": "Detailed chart analysis diagram (Page 9/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 9): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 9): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Consequent Encroachment (mốc 50% CE của FVG)",
        "headingEn": "Consequent Encroachment",
        "contentVi": [
          "Consequent Encroachment (mốc 50% CE của FVG)",
          "0.5"
        ],
        "contentEn": [
          "Consequent Encroachment",
          "0.5"
        ],
        "imageUrl": "/pdf_assets/inversion/page_10.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 10/17)",
        "captionEn": "Detailed chart analysis diagram (Page 10/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 10): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 10): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Consequent Encroachment (mốc 50% CE của FVG)",
        "headingEn": "Consequent Encroachment",
        "contentVi": [
          "Consequent Encroachment (mốc 50% CE của FVG)",
          "0.5"
        ],
        "contentEn": [
          "Consequent Encroachment",
          "0.5"
        ],
        "imageUrl": "/pdf_assets/inversion/page_11.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 11/17)",
        "captionEn": "Detailed chart analysis diagram (Page 11/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 11): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 11): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Consequent Encroachment (mốc 50% CE của FVG)",
        "headingEn": "Consequent Encroachment",
        "contentVi": [
          "Consequent Encroachment (mốc 50% CE của FVG)",
          "0.5"
        ],
        "contentEn": [
          "Consequent Encroachment",
          "0.5"
        ],
        "imageUrl": "/pdf_assets/inversion/page_12.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 12/17)",
        "captionEn": "Detailed chart analysis diagram (Page 12/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 12): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 12): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Consequent Encroachment (mốc 50% CE của FVG)",
        "headingEn": "Consequent Encroachment",
        "contentVi": [
          "Consequent Encroachment (mốc 50% CE của FVG)",
          "0.5"
        ],
        "contentEn": [
          "Consequent Encroachment",
          "0.5"
        ],
        "imageUrl": "/pdf_assets/inversion/page_13.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 13/17)",
        "captionEn": "Detailed chart analysis diagram (Page 13/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 13): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 13): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Consequent Encroachment (mốc 50% CE của FVG)",
        "headingEn": "Consequent Encroachment",
        "contentVi": [
          "Consequent Encroachment (mốc 50% CE của FVG)",
          "0.5"
        ],
        "contentEn": [
          "Consequent Encroachment",
          "0.5"
        ],
        "imageUrl": "/pdf_assets/inversion/page_14.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 14/17)",
        "captionEn": "Detailed chart analysis diagram (Page 14/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 14): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 14): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Old SIBI / BISI",
        "headingEn": "Old SIBI / BISI",
        "contentVi": [
          "Old SIBI / BISI"
        ],
        "contentEn": [
          "Old SIBI / BISI"
        ],
        "imageUrl": "/pdf_assets/inversion/page_15.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 15/17)",
        "captionEn": "Detailed chart analysis diagram (Page 15/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 15): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 15): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Old SIBI / BISI",
        "headingEn": "Old SIBI / BISI",
        "contentVi": [
          "Old SIBI / BISI"
        ],
        "contentEn": [
          "Old SIBI / BISI"
        ],
        "imageUrl": "/pdf_assets/inversion/page_16.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 16/17)",
        "captionEn": "Detailed chart analysis diagram (Page 16/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 16): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 16): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "Inversion Video"
        ],
        "contentEn": [
          "Resources",
          "Inversion Video"
        ],
        "imageUrl": "/pdf_assets/inversion/page_17.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 17/17)",
        "captionEn": "Detailed chart analysis diagram (Page 17/17)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 17): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 17): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "Mitigation_Blocks.pdf": {
    "pdfFileName": "Mitigation_Blocks.pdf",
    "slug": "mitigation_blocks",
    "totalPages": 15,
    "sections": [
      {
        "headingVi": "MITIGATION BLOCKS",
        "headingEn": "MITIGATION BLOCKS",
        "contentVi": [
          "MITIGATION BLOCKS"
        ],
        "contentEn": [
          "MITIGATION BLOCKS"
        ],
        "imageUrl": "/pdf_assets/mitigation_blocks/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/15)",
        "captionEn": "Detailed chart analysis diagram (Page 1/15)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Mitigation Blocks",
        "headingEn": "Mitigation Blocks",
        "contentVi": [
          "Mitigation Blocks",
          "Mitigation Blocks"
        ],
        "contentEn": [
          "Mitigation Blocks",
          "Mitigation Blocks"
        ],
        "imageUrl": "/pdf_assets/mitigation_blocks/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/15)",
        "captionEn": "Detailed chart analysis diagram (Page 2/15)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Mitigation Blocks",
        "headingEn": "Mitigation Blocks",
        "contentVi": [
          "Mitigation Blocks"
        ],
        "contentEn": [
          "Mitigation Blocks"
        ],
        "imageUrl": "/pdf_assets/mitigation_blocks/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/15)",
        "captionEn": "Detailed chart analysis diagram (Page 3/15)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Mitigation Blocks",
        "headingEn": "Mitigation Blocks",
        "contentVi": [
          "Mitigation Blocks"
        ],
        "contentEn": [
          "Mitigation Blocks"
        ],
        "imageUrl": "/pdf_assets/mitigation_blocks/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/15)",
        "captionEn": "Detailed chart analysis diagram (Page 4/15)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Mitigation Blocks",
        "headingEn": "Mitigation Blocks",
        "contentVi": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "contentEn": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "imageUrl": "/pdf_assets/mitigation_blocks/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/15)",
        "captionEn": "Detailed chart analysis diagram (Page 5/15)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Mitigation Blocks",
        "headingEn": "Mitigation Blocks",
        "contentVi": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "contentEn": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "imageUrl": "/pdf_assets/mitigation_blocks/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/15)",
        "captionEn": "Detailed chart analysis diagram (Page 6/15)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Mitigation Blocks",
        "headingEn": "Mitigation Blocks",
        "contentVi": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "contentEn": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "imageUrl": "/pdf_assets/mitigation_blocks/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/15)",
        "captionEn": "Detailed chart analysis diagram (Page 7/15)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Mitigation Blocks",
        "headingEn": "Mitigation Blocks",
        "contentVi": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "contentEn": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "imageUrl": "/pdf_assets/mitigation_blocks/page_8.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 8/15)",
        "captionEn": "Detailed chart analysis diagram (Page 8/15)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 8): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 8): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Mitigation Blocks",
        "headingEn": "Mitigation Blocks",
        "contentVi": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "contentEn": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "imageUrl": "/pdf_assets/mitigation_blocks/page_9.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 9/15)",
        "captionEn": "Detailed chart analysis diagram (Page 9/15)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 9): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 9): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Mitigation Blocks",
        "headingEn": "Mitigation Blocks",
        "contentVi": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "contentEn": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "imageUrl": "/pdf_assets/mitigation_blocks/page_10.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 10/15)",
        "captionEn": "Detailed chart analysis diagram (Page 10/15)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 10): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 10): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Mitigation Blocks",
        "headingEn": "Mitigation Blocks",
        "contentVi": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "contentEn": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "imageUrl": "/pdf_assets/mitigation_blocks/page_11.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 11/15)",
        "captionEn": "Detailed chart analysis diagram (Page 11/15)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 11): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 11): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Mitigation Blocks",
        "headingEn": "Mitigation Blocks",
        "contentVi": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "contentEn": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "imageUrl": "/pdf_assets/mitigation_blocks/page_12.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 12/15)",
        "captionEn": "Detailed chart analysis diagram (Page 12/15)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 12): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 12): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Mitigation Blocks",
        "headingEn": "Mitigation Blocks",
        "contentVi": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "contentEn": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "imageUrl": "/pdf_assets/mitigation_blocks/page_13.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 13/15)",
        "captionEn": "Detailed chart analysis diagram (Page 13/15)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 13): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 13): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Mitigation Blocks",
        "headingEn": "Mitigation Blocks",
        "contentVi": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "contentEn": [
          "Mitigation Blocks",
          "HTF Level"
        ],
        "imageUrl": "/pdf_assets/mitigation_blocks/page_14.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 14/15)",
        "captionEn": "Detailed chart analysis diagram (Page 14/15)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 14): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 14): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "Mitigation Video"
        ],
        "contentEn": [
          "Resources",
          "Mitigation Video"
        ],
        "imageUrl": "/pdf_assets/mitigation_blocks/page_15.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 15/15)",
        "captionEn": "Detailed chart analysis diagram (Page 15/15)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 15): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 15): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "Orderblocks.pdf": {
    "pdfFileName": "Orderblocks.pdf",
    "slug": "orderblocks",
    "totalPages": 9,
    "sections": [
      {
        "headingVi": "ORDERBLOCKS",
        "headingEn": "ORDERBLOCKS",
        "contentVi": [
          "ORDERBLOCKS"
        ],
        "contentEn": [
          "ORDERBLOCKS"
        ],
        "imageUrl": "/pdf_assets/orderblocks/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/9)",
        "captionEn": "Detailed chart analysis diagram (Page 1/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Orderblocks",
        "headingEn": "Orderblocks",
        "contentVi": [
          "Orderblocks",
          "Orderblocks",
          "Mean Threshold (mốc 50% thân OB)",
          "Stop Losses"
        ],
        "contentEn": [
          "Orderblocks",
          "Orderblocks",
          "Mean Threshold",
          "Stop Losses"
        ],
        "imageUrl": "/pdf_assets/orderblocks/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/9)",
        "captionEn": "Detailed chart analysis diagram (Page 2/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Orderblocks",
        "headingEn": "Orderblocks",
        "contentVi": [
          "Orderblocks",
          "Important Level",
          "Important Level"
        ],
        "contentEn": [
          "Orderblocks",
          "Important Level",
          "Important Level"
        ],
        "imageUrl": "/pdf_assets/orderblocks/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/9)",
        "captionEn": "Detailed chart analysis diagram (Page 3/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Orderblocks",
        "headingEn": "Orderblocks",
        "contentVi": [
          "Orderblocks"
        ],
        "contentEn": [
          "Orderblocks"
        ],
        "imageUrl": "/pdf_assets/orderblocks/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/9)",
        "captionEn": "Detailed chart analysis diagram (Page 4/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Orderblocks",
        "headingEn": "Orderblocks",
        "contentVi": [
          "Orderblocks",
          "FVG"
        ],
        "contentEn": [
          "Orderblocks",
          "FVG"
        ],
        "imageUrl": "/pdf_assets/orderblocks/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/9)",
        "captionEn": "Detailed chart analysis diagram (Page 5/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Orderblocks",
        "headingEn": "Orderblocks",
        "contentVi": [
          "Orderblocks"
        ],
        "contentEn": [
          "Orderblocks"
        ],
        "imageUrl": "/pdf_assets/orderblocks/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/9)",
        "captionEn": "Detailed chart analysis diagram (Page 6/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Mean Threshold (mốc 50% thân OB)",
        "headingEn": "Mean Threshold",
        "contentVi": [
          "Mean Threshold (mốc 50% thân OB)",
          "Important Level",
          "0.5"
        ],
        "contentEn": [
          "Mean Threshold",
          "Important Level",
          "0.5"
        ],
        "imageUrl": "/pdf_assets/orderblocks/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/9)",
        "captionEn": "Detailed chart analysis diagram (Page 7/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Stop Losses",
        "headingEn": "Stop Losses",
        "contentVi": [
          "Stop Losses",
          "Swing Low"
        ],
        "contentEn": [
          "Stop Losses",
          "Swing Low"
        ],
        "imageUrl": "/pdf_assets/orderblocks/page_8.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 8/9)",
        "captionEn": "Detailed chart analysis diagram (Page 8/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 8): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 8): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "OB Video"
        ],
        "contentEn": [
          "Resources",
          "OB Video"
        ],
        "imageUrl": "/pdf_assets/orderblocks/page_9.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 9/9)",
        "captionEn": "Detailed chart analysis diagram (Page 9/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 9): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 9): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "OTE.pdf": {
    "pdfFileName": "OTE.pdf",
    "slug": "ote",
    "totalPages": 10,
    "sections": [
      {
        "headingVi": "OPTIMAL TRADE",
        "headingEn": "OPTIMAL TRADE",
        "contentVi": [
          "OPTIMAL TRADE",
          "ENTRY"
        ],
        "contentEn": [
          "OPTIMAL TRADE",
          "ENTRY"
        ],
        "imageUrl": "/pdf_assets/ote/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/10)",
        "captionEn": "Detailed chart analysis diagram (Page 1/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "OTE",
        "headingEn": "OTE",
        "contentVi": [
          "OTE",
          "Fibonacci Settings",
          "Anchor Points",
          "Optimal Trade Entry (OTE)",
          "Alignment With PD Arrays",
          "Extra"
        ],
        "contentEn": [
          "OTE",
          "Fibonacci Settings",
          "Anchor Points",
          "Optimal Trade Entry (OTE)",
          "Alignment With PD Arrays",
          "Extra"
        ],
        "imageUrl": "/pdf_assets/ote/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/10)",
        "captionEn": "Detailed chart analysis diagram (Page 2/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Fibonacci Settings",
        "headingEn": "Fibonacci Settings",
        "contentVi": [
          "Fibonacci Settings",
          ".79",
          ".705",
          ".62",
          ".79",
          ".705",
          ".62",
          "The Fibonacci Settings:",
          "0.5",
          "0.62",
          "0.705",
          "0.79"
        ],
        "contentEn": [
          "Fibonacci Settings",
          ".79",
          ".705",
          ".62",
          ".79",
          ".705",
          ".62",
          "The Fibonacci Settings:",
          "0.5",
          "0.62",
          "0.705",
          "0.79"
        ],
        "imageUrl": "/pdf_assets/ote/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/10)",
        "captionEn": "Detailed chart analysis diagram (Page 3/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": ".79",
        "headingEn": ".79",
        "contentVi": [
          ".79",
          ".705",
          ".62",
          "Anchor Points",
          "Anchored from swing high to",
          "swing low. Liquidity PDF"
        ],
        "contentEn": [
          ".79",
          ".705",
          ".62",
          "Anchor Points",
          "Anchored from swing high to",
          "swing low. Liquidity PDF"
        ],
        "imageUrl": "/pdf_assets/ote/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/10)",
        "captionEn": "Detailed chart analysis diagram (Page 4/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Optimal Trade Entry (OTE)",
        "headingEn": "Optimal Trade Entry (OTE)",
        "contentVi": [
          "Optimal Trade Entry (OTE)",
          ".79",
          ".705",
          ".62"
        ],
        "contentEn": [
          "Optimal Trade Entry (OTE)",
          ".79",
          ".705",
          ".62"
        ],
        "imageUrl": "/pdf_assets/ote/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/10)",
        "captionEn": "Detailed chart analysis diagram (Page 5/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Alignment With PD Arrays",
        "headingEn": "Alignment With PD Arrays",
        "contentVi": [
          "Alignment With PD Arrays",
          ".79",
          ".705",
          ".62"
        ],
        "contentEn": [
          "Alignment With PD Arrays",
          ".79",
          ".705",
          ".62"
        ],
        "imageUrl": "/pdf_assets/ote/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/10)",
        "captionEn": "Detailed chart analysis diagram (Page 6/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": ".79",
        "headingEn": ".79",
        "contentVi": [
          ".79",
          ".705",
          ".62",
          "Extra"
        ],
        "contentEn": [
          ".79",
          ".705",
          ".62",
          "Extra"
        ],
        "imageUrl": "/pdf_assets/ote/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/10)",
        "captionEn": "Detailed chart analysis diagram (Page 7/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": ".79",
        "headingEn": ".79",
        "contentVi": [
          ".79",
          ".705",
          ".62",
          "Extra"
        ],
        "contentEn": [
          ".79",
          ".705",
          ".62",
          "Extra"
        ],
        "imageUrl": "/pdf_assets/ote/page_8.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 8/10)",
        "captionEn": "Detailed chart analysis diagram (Page 8/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 8): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 8): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": ".79",
        "headingEn": ".79",
        "contentVi": [
          ".79",
          ".705",
          ".62",
          "Extra"
        ],
        "contentEn": [
          ".79",
          ".705",
          ".62",
          "Extra"
        ],
        "imageUrl": "/pdf_assets/ote/page_9.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 9/10)",
        "captionEn": "Detailed chart analysis diagram (Page 9/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 9): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 9): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "Optimal Trade Entry Video"
        ],
        "contentEn": [
          "Resources",
          "Optimal Trade Entry Video"
        ],
        "imageUrl": "/pdf_assets/ote/page_10.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 10/10)",
        "captionEn": "Detailed chart analysis diagram (Page 10/10)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 10): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 10): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "Position_Sizing.pdf": {
    "pdfFileName": "Position_Sizing.pdf",
    "slug": "position_sizing",
    "totalPages": 9,
    "sections": [
      {
        "headingVi": "POSITION SIZING",
        "headingEn": "POSITION SIZING",
        "contentVi": [
          "POSITION SIZING"
        ],
        "contentEn": [
          "POSITION SIZING"
        ],
        "imageUrl": "/pdf_assets/position_sizing/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/9)",
        "captionEn": "Detailed chart analysis diagram (Page 1/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Position Sizing",
        "headingEn": "Position Sizing",
        "contentVi": [
          "Position Sizing",
          "Win Rate & Risk : Reward",
          "Position Sizing Options",
          "Fixed Contract",
          "Fixed $ / %"
        ],
        "contentEn": [
          "Position Sizing",
          "Win Rate & Risk : Reward",
          "Position Sizing Options",
          "Fixed Contract",
          "Fixed $ / %"
        ],
        "imageUrl": "/pdf_assets/position_sizing/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/9)",
        "captionEn": "Detailed chart analysis diagram (Page 2/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Win Rate & RR",
        "headingEn": "Win Rate & RR",
        "contentVi": [
          "Win Rate & RR",
          "20%",
          "30%",
          "40%",
          "50%",
          "60%",
          "1:1",
          "1:2",
          "1:3",
          "1:4",
          "1:5",
          "Not",
          "Profitable",
          "Not",
          "Profitable",
          "Not",
          "Profitable",
          "Not",
          "Profitable",
          "Not",
          "Profitable",
          "Not",
          "Profitable",
          "Breakeven",
          "Breakeven",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Win Rate",
          "Risk : Reward Ratio",
          "Assuming Same $ Risk Per Trade"
        ],
        "contentEn": [
          "Win Rate & RR",
          "20%",
          "30%",
          "40%",
          "50%",
          "60%",
          "1:1",
          "1:2",
          "1:3",
          "1:4",
          "1:5",
          "Not",
          "Profitable",
          "Not",
          "Profitable",
          "Not",
          "Profitable",
          "Not",
          "Profitable",
          "Not",
          "Profitable",
          "Not",
          "Profitable",
          "Breakeven",
          "Breakeven",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Profitable",
          "Win Rate",
          "Risk : Reward Ratio",
          "Assuming Same $ Risk Per Trade"
        ],
        "imageUrl": "/pdf_assets/position_sizing/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/9)",
        "captionEn": "Detailed chart analysis diagram (Page 3/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Position Sizing Options",
        "headingEn": "Position Sizing Options",
        "contentVi": [
          "Position Sizing Options",
          "Fixed Contracts",
          "Fixed Dollar",
          "Fixed Percentage",
          "Options For Position Sizing"
        ],
        "contentEn": [
          "Position Sizing Options",
          "Fixed Contracts",
          "Fixed Dollar",
          "Fixed Percentage",
          "Options For Position Sizing"
        ],
        "imageUrl": "/pdf_assets/position_sizing/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/9)",
        "captionEn": "Detailed chart analysis diagram (Page 4/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Fixed Contract",
        "headingEn": "Fixed Contract",
        "contentVi": [
          "Fixed Contract",
          "2 NQ Contracts",
          "20 Points Risk",
          "Risk = $800",
          "2 NQ Contracts Used In Each Scenario",
          "2 NQ Contracts",
          "40 Points Risk",
          "Risk = $1600",
          "2 NQ Contracts",
          "10 Points Risk",
          "Risk = $400"
        ],
        "contentEn": [
          "Fixed Contract",
          "2 NQ Contracts",
          "20 Points Risk",
          "Risk = $800",
          "2 NQ Contracts Used In Each Scenario",
          "2 NQ Contracts",
          "40 Points Risk",
          "Risk = $1600",
          "2 NQ Contracts",
          "10 Points Risk",
          "Risk = $400"
        ],
        "imageUrl": "/pdf_assets/position_sizing/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/9)",
        "captionEn": "Detailed chart analysis diagram (Page 5/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Fixed Contract",
        "headingEn": "Fixed Contract",
        "contentVi": [
          "Fixed Contract",
          "2 NQ Contracts",
          "20 Points Risk",
          "Risk = $800",
          "2 NQ Contracts Used In Each Scenario",
          "2 NQ Contracts",
          "40 Points Risk",
          "Risk = $1600",
          "2 NQ Contracts",
          "10 Points Risk",
          "Risk = $400",
          "-$800 (-1R)",
          "-$1600 (-1R)",
          "+$1600 (+4R)",
          "------------------------",
          "-$800 (+2R)???"
        ],
        "contentEn": [
          "Fixed Contract",
          "2 NQ Contracts",
          "20 Points Risk",
          "Risk = $800",
          "2 NQ Contracts Used In Each Scenario",
          "2 NQ Contracts",
          "40 Points Risk",
          "Risk = $1600",
          "2 NQ Contracts",
          "10 Points Risk",
          "Risk = $400",
          "-$800 (-1R)",
          "-$1600 (-1R)",
          "+$1600 (+4R)",
          "------------------------",
          "-$800 (+2R)???"
        ],
        "imageUrl": "/pdf_assets/position_sizing/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/9)",
        "captionEn": "Detailed chart analysis diagram (Page 6/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Fixed $/%",
        "headingEn": "Fixed $/%",
        "contentVi": [
          "Fixed $/%",
          "2.5 Contracts",
          "20 Points Risk",
          "Risk = $1000",
          "Adjust Contracts Per Scenario To",
          "Maintain Fixed Risk Of $1000",
          "$ of defined risk / $ per point / stop size",
          "1000/20/20 = 2.5",
          "5 NQ Contracts",
          "10 Points Risk",
          "Risk = $1000",
          "1.25 NQ Contracts",
          "40 Points Risk",
          "Risk = $1000",
          "1000/20/40 = 1.25",
          "1000/20/10 = 5",
          "25 Micros",
          "12.5 Micros",
          "50 Micros"
        ],
        "contentEn": [
          "Fixed $/%",
          "2.5 Contracts",
          "20 Points Risk",
          "Risk = $1000",
          "Adjust Contracts Per Scenario To",
          "Maintain Fixed Risk Of $1000",
          "$ of defined risk / $ per point / stop size",
          "1000/20/20 = 2.5",
          "5 NQ Contracts",
          "10 Points Risk",
          "Risk = $1000",
          "1.25 NQ Contracts",
          "40 Points Risk",
          "Risk = $1000",
          "1000/20/40 = 1.25",
          "1000/20/10 = 5",
          "25 Micros",
          "12.5 Micros",
          "50 Micros"
        ],
        "imageUrl": "/pdf_assets/position_sizing/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/9)",
        "captionEn": "Detailed chart analysis diagram (Page 7/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Fixed $/%",
        "headingEn": "Fixed $/%",
        "contentVi": [
          "Fixed $/%",
          "2.5 Contracts",
          "20 Points Risk",
          "Risk = $1000",
          "Adjust Contracts Per Scenario To",
          "Maintain Fixed Risk Of $1000",
          "$ of defined risk / $ per point / stop size",
          "1000/20/20 = 2.5",
          "5 NQ Contracts",
          "10 Points Risk",
          "Risk = $1000",
          "1.25 NQ Contracts",
          "40 Points Risk",
          "Risk = $1000",
          "1000/20/40 = 1.25",
          "1000/20/10 = 5",
          "25 Micros",
          "12.5 Micros",
          "50 Micros",
          "-$1000 (-1R)",
          "-$1000 (-1R)",
          "+$4000 (+4R)",
          "------------------------",
          "+$2000 (+2R)"
        ],
        "contentEn": [
          "Fixed $/%",
          "2.5 Contracts",
          "20 Points Risk",
          "Risk = $1000",
          "Adjust Contracts Per Scenario To",
          "Maintain Fixed Risk Of $1000",
          "$ of defined risk / $ per point / stop size",
          "1000/20/20 = 2.5",
          "5 NQ Contracts",
          "10 Points Risk",
          "Risk = $1000",
          "1.25 NQ Contracts",
          "40 Points Risk",
          "Risk = $1000",
          "1000/20/40 = 1.25",
          "1000/20/10 = 5",
          "25 Micros",
          "12.5 Micros",
          "50 Micros",
          "-$1000 (-1R)",
          "-$1000 (-1R)",
          "+$4000 (+4R)",
          "------------------------",
          "+$2000 (+2R)"
        ],
        "imageUrl": "/pdf_assets/position_sizing/page_8.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 8/9)",
        "captionEn": "Detailed chart analysis diagram (Page 8/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 8): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 8): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "Position Sizing Video"
        ],
        "contentEn": [
          "Resources",
          "Position Sizing Video"
        ],
        "imageUrl": "/pdf_assets/position_sizing/page_9.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 9/9)",
        "captionEn": "Detailed chart analysis diagram (Page 9/9)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 9): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 9): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "Silver_Bullet_AM.pdf": {
    "pdfFileName": "Silver_Bullet_AM.pdf",
    "slug": "silver_bullet_am",
    "totalPages": 6,
    "sections": [
      {
        "headingVi": "SILVER BULLET",
        "headingEn": "SILVER BULLET",
        "contentVi": [
          "SILVER BULLET",
          "AM SESSION"
        ],
        "contentEn": [
          "SILVER BULLET",
          "AM SESSION"
        ],
        "imageUrl": "/pdf_assets/silver_bullet_am/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/6)",
        "captionEn": "Detailed chart analysis diagram (Page 1/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Silver Bullet – AM",
        "headingEn": "Silver Bullet – AM",
        "contentVi": [
          "Silver Bullet – AM",
          "Time",
          "Framework"
        ],
        "contentEn": [
          "Silver Bullet – AM",
          "Time",
          "Framework"
        ],
        "imageUrl": "/pdf_assets/silver_bullet_am/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/6)",
        "captionEn": "Detailed chart analysis diagram (Page 2/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Time",
        "headingEn": "Time",
        "contentVi": [
          "Time",
          "9:30",
          "10:00",
          "11:00",
          "AM Session",
          "Silver Bullet Window",
          "(EST)"
        ],
        "contentEn": [
          "Time",
          "9:30",
          "10:00",
          "11:00",
          "AM Session",
          "Silver Bullet Window",
          "(EST)"
        ],
        "imageUrl": "/pdf_assets/silver_bullet_am/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/6)",
        "captionEn": "Detailed chart analysis diagram (Page 3/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Framework",
        "headingEn": "Framework",
        "contentVi": [
          "Framework",
          "9:00am Hourly High",
          "9:00am Hourly Low",
          "9:00am Hourly High",
          "9:00am Hourly Low",
          "Intraday bias video uses the previous candles high",
          "and low to frame a reversal. The previous hourly",
          "candle (9:00am) will be used in this framework."
        ],
        "contentEn": [
          "Framework",
          "9:00am Hourly High",
          "9:00am Hourly Low",
          "9:00am Hourly High",
          "9:00am Hourly Low",
          "Intraday bias video uses the previous candles high",
          "and low to frame a reversal. The previous hourly",
          "candle (9:00am) will be used in this framework."
        ],
        "imageUrl": "/pdf_assets/silver_bullet_am/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/6)",
        "captionEn": "Detailed chart analysis diagram (Page 4/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Framework",
        "headingEn": "Framework",
        "contentVi": [
          "Framework",
          "10:00",
          "11:00",
          "AM Session",
          "Silver Bullet Window",
          "(EST)",
          "9:00am Hourly High",
          "9:00am Hourly Low",
          "NASDAQ",
          "1 Minute Chart"
        ],
        "contentEn": [
          "Framework",
          "10:00",
          "11:00",
          "AM Session",
          "Silver Bullet Window",
          "(EST)",
          "9:00am Hourly High",
          "9:00am Hourly Low",
          "NASDAQ",
          "1 Minute Chart"
        ],
        "imageUrl": "/pdf_assets/silver_bullet_am/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/6)",
        "captionEn": "Detailed chart analysis diagram (Page 5/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "Silver Bullet Video"
        ],
        "contentEn": [
          "Resources",
          "Silver Bullet Video"
        ],
        "imageUrl": "/pdf_assets/silver_bullet_am/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/6)",
        "captionEn": "Detailed chart analysis diagram (Page 6/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "Sons_Model.pdf": {
    "pdfFileName": "Sons_Model.pdf",
    "slug": "sons_model",
    "totalPages": 6,
    "sections": [
      {
        "headingVi": "ICT SON’S MODEL",
        "headingEn": "ICT SON’S MODEL",
        "contentVi": [
          "ICT SON’S MODEL"
        ],
        "contentEn": [
          "ICT SON’S MODEL"
        ],
        "imageUrl": "/pdf_assets/sons_model/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/6)",
        "captionEn": "Detailed chart analysis diagram (Page 1/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "ICT Son’s Model",
        "headingEn": "ICT Son’s Model",
        "contentVi": [
          "ICT Son’s Model",
          "Draw On Liquidity",
          "Stop Raid",
          "Entry"
        ],
        "contentEn": [
          "ICT Son’s Model",
          "Draw On Liquidity",
          "Stop Raid",
          "Entry"
        ],
        "imageUrl": "/pdf_assets/sons_model/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/6)",
        "captionEn": "Detailed chart analysis diagram (Page 2/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Draw On Liquidity",
        "headingEn": "Draw On Liquidity",
        "contentVi": [
          "Draw On Liquidity",
          "H1 or M15 Chart"
        ],
        "contentEn": [
          "Draw On Liquidity",
          "H1 or M15 Chart"
        ],
        "imageUrl": "/pdf_assets/sons_model/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/6)",
        "captionEn": "Detailed chart analysis diagram (Page 3/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Stop Raid",
        "headingEn": "Stop Raid",
        "contentVi": [
          "Stop Raid",
          "Draw On Liquidity",
          "Stop Raid",
          "M5 Chart"
        ],
        "contentEn": [
          "Stop Raid",
          "Draw On Liquidity",
          "Stop Raid",
          "M5 Chart"
        ],
        "imageUrl": "/pdf_assets/sons_model/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/6)",
        "captionEn": "Detailed chart analysis diagram (Page 4/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Entry",
        "headingEn": "Entry",
        "contentVi": [
          "Entry",
          "M5 Stop Raid",
          "30s Chart"
        ],
        "contentEn": [
          "Entry",
          "M5 Stop Raid",
          "30s Chart"
        ],
        "imageUrl": "/pdf_assets/sons_model/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/6)",
        "captionEn": "Detailed chart analysis diagram (Page 5/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "ICT Son’s Video"
        ],
        "contentEn": [
          "Resources",
          "ICT Son’s Video"
        ],
        "imageUrl": "/pdf_assets/sons_model/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/6)",
        "captionEn": "Detailed chart analysis diagram (Page 6/6)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "TTrades Reversal Sequence (TTRS).pdf": {
    "pdfFileName": "TTrades Reversal Sequence (TTRS).pdf",
    "slug": "ttrades_reversal_sequence__ttrs_",
    "totalPages": 18,
    "sections": [
      {
        "headingVi": "TTrades",
        "headingEn": "TTrades",
        "contentVi": [
          "TTrades",
          "Build an entry model",
          "Find an entry model that works for you"
        ],
        "contentEn": [
          "TTrades",
          "Build an entry model",
          "Find an entry model that works for you"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/18)",
        "captionEn": "Detailed chart analysis diagram (Page 1/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Contents",
        "headingEn": "Contents",
        "contentVi": [
          "Contents",
          "TTrades",
          "Killzones",
          "Timeframes",
          "Concepts",
          "Order of reversal"
        ],
        "contentEn": [
          "Contents",
          "TTrades",
          "Killzones",
          "Timeframes",
          "Concepts",
          "Order of reversal"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/18)",
        "captionEn": "Detailed chart analysis diagram (Page 2/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Killzones",
        "headingEn": "Killzones",
        "contentVi": [
          "Killzones",
          "Eastern Standard Time (EST)",
          "TTrades"
        ],
        "contentEn": [
          "Killzones",
          "Eastern Standard Time (EST)",
          "TTrades"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/18)",
        "captionEn": "Detailed chart analysis diagram (Page 3/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "TImeframes",
        "headingEn": "TImeframes",
        "contentVi": [
          "TImeframes",
          "TTrades",
          "Choose an entry timeframe that suites your personality",
          "0 Impatient people are generally better suited with a lower time frame entr\u0019",
          "0 Patient people are generally better suited on a higher time frame for entry",
          "(Impatient)",
          "(Patient)",
          "M15"
        ],
        "contentEn": [
          "TImeframes",
          "TTrades",
          "Choose an entry timeframe that suites your personality",
          "0 Impatient people are generally better suited with a lower time frame entr\u0019",
          "0 Patient people are generally better suited on a higher time frame for entry",
          "(Impatient)",
          "(Patient)",
          "M15"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/18)",
        "captionEn": "Detailed chart analysis diagram (Page 4/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Concepts - FVG",
        "headingEn": "Concepts - FVG",
        "contentVi": [
          "Concepts - FVG",
          "TTrades",
          "Bearish Example",
          "Bullish Example"
        ],
        "contentEn": [
          "Concepts - FVG",
          "TTrades",
          "Bearish Example",
          "Bullish Example"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/18)",
        "captionEn": "Detailed chart analysis diagram (Page 5/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Concepts - Inversion",
        "headingEn": "Concepts - Inversion",
        "contentVi": [
          "Concepts - Inversion",
          "TTrades"
        ],
        "contentEn": [
          "Concepts - Inversion",
          "TTrades"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/18)",
        "captionEn": "Detailed chart analysis diagram (Page 6/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Concepts - OB",
        "headingEn": "Concepts - OB",
        "contentVi": [
          "Concepts - OB",
          "TTrades",
          "Bearish Khối lệnh Orderblock (OB)",
          "Bullish Khối lệnh Orderblock (OB)",
          "Important Level",
          "Important Level"
        ],
        "contentEn": [
          "Concepts - OB",
          "TTrades",
          "Bearish Orderblock",
          "Bullish Orderblock",
          "Important Level",
          "Important Level"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/18)",
        "captionEn": "Detailed chart analysis diagram (Page 7/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Concepts - Breaker",
        "headingEn": "Concepts - Breaker",
        "contentVi": [
          "Concepts - Breaker",
          "TTrades",
          "Bearish Khối Breaker Block",
          "Bullish Khối Breaker Block"
        ],
        "contentEn": [
          "Concepts - Breaker",
          "TTrades",
          "Bearish Breaker Block",
          "Bullish Breaker Block"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_8.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 8/18)",
        "captionEn": "Detailed chart analysis diagram (Page 8/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 8): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 8): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Concepts - OTE",
        "headingEn": "Concepts - OTE",
        "contentVi": [
          "Concepts - OTE",
          "TTrades",
          "0.705",
          "0.62",
          "0.79",
          "0.5"
        ],
        "contentEn": [
          "Concepts - OTE",
          "TTrades",
          "0.705",
          "0.62",
          "0.79",
          "0.5"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_9.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 9/18)",
        "captionEn": "Detailed chart analysis diagram (Page 9/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 9): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 9): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Additional - vùng định giá cao (Premium) and vùng định giá thấp (Discount)",
        "headingEn": "Additional - Premium and Discount",
        "contentVi": [
          "Additional - vùng định giá cao (Premium) and vùng định giá thấp (Discount)",
          "TTrades",
          "0.5"
        ],
        "contentEn": [
          "Additional - Premium and Discount",
          "TTrades",
          "0.5"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_10.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 10/18)",
        "captionEn": "Detailed chart analysis diagram (Page 10/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 10): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 10): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Additional - vùng định giá cao (Premium) and vùng định giá thấp (Discount)",
        "headingEn": "Additional - Premium and Discount",
        "contentVi": [
          "Additional - vùng định giá cao (Premium) and vùng định giá thấp (Discount)",
          "TTrades",
          "0.5"
        ],
        "contentEn": [
          "Additional - Premium and Discount",
          "TTrades",
          "0.5"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_11.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 11/18)",
        "captionEn": "Detailed chart analysis diagram (Page 11/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 11): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 11): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Additional - SMT",
        "headingEn": "Additional - SMT",
        "contentVi": [
          "Additional - SMT",
          "TTrades",
          "Stronger Asset",
          "Weaker Asset"
        ],
        "contentEn": [
          "Additional - SMT",
          "TTrades",
          "Stronger Asset",
          "Weaker Asset"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_12.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 12/18)",
        "captionEn": "Detailed chart analysis diagram (Page 12/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 12): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 12): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Order of reversal",
        "headingEn": "Order of reversal",
        "contentVi": [
          "Order of reversal",
          "TTrades",
          "turtle soup"
        ],
        "contentEn": [
          "Order of reversal",
          "TTrades",
          "turtle soup"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_13.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 13/18)",
        "captionEn": "Detailed chart analysis diagram (Page 13/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 13): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 13): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Order of reversal",
        "headingEn": "Order of reversal",
        "contentVi": [
          "Order of reversal",
          "TTrades",
          "! turtle sou\u001a",
          "\u0015! inversion"
        ],
        "contentEn": [
          "Order of reversal",
          "TTrades",
          "! turtle sou\u001a",
          "\u0015! inversion"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_14.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 14/18)",
        "captionEn": "Detailed chart analysis diagram (Page 14/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 14): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 14): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Order of reversal",
        "headingEn": "Order of reversal",
        "contentVi": [
          "Order of reversal",
          "TTrades",
          "'( turtle sou",
          "\u0019( inversio\"",
          "\u001a( cisd / ob"
        ],
        "contentEn": [
          "Order of reversal",
          "TTrades",
          "'( turtle sou",
          "\u0019( inversio\"",
          "\u001a( cisd / ob"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_15.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 15/18)",
        "captionEn": "Detailed chart analysis diagram (Page 15/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 15): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 15): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Order of reversal",
        "headingEn": "Order of reversal",
        "contentVi": [
          "Order of reversal",
          "TTrades",
          ",' turtle sou$",
          "' inversio(",
          "!' cisd / o\u0018",
          "\u0017' fvg"
        ],
        "contentEn": [
          "Order of reversal",
          "TTrades",
          ",' turtle sou$",
          "' inversio(",
          "!' cisd / o\u0018",
          "\u0017' fvg"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_16.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 16/18)",
        "captionEn": "Detailed chart analysis diagram (Page 16/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 16): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 16): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Order of reversal",
        "headingEn": "Order of reversal",
        "contentVi": [
          "Order of reversal",
          "TTrades",
          "1+ turtle sou(",
          "$+ inversio,",
          "%+ cisd / o\u001b",
          "\u0019+ fv\u0017",
          "\u0016+ breaker"
        ],
        "contentEn": [
          "Order of reversal",
          "TTrades",
          "1+ turtle sou(",
          "$+ inversio,",
          "%+ cisd / o\u001b",
          "\u0019+ fv\u0017",
          "\u0016+ breaker"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_17.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 17/18)",
        "captionEn": "Detailed chart analysis diagram (Page 17/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 17): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 17): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Additional Resources",
        "headingEn": "Additional Resources",
        "contentVi": [
          "Additional Resources",
          "X (Twitter)",
          "Website",
          "Video link",
          "TTrades"
        ],
        "contentEn": [
          "Additional Resources",
          "X (Twitter)",
          "Website",
          "Video link",
          "TTrades"
        ],
        "imageUrl": "/pdf_assets/ttrades_reversal_sequence__ttrs_/page_18.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 18/18)",
        "captionEn": "Detailed chart analysis diagram (Page 18/18)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 18): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 18): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  },
  "Unicorn_Model.pdf": {
    "pdfFileName": "Unicorn_Model.pdf",
    "slug": "unicorn_model",
    "totalPages": 7,
    "sections": [
      {
        "headingVi": "UNICORN MODEL",
        "headingEn": "UNICORN MODEL",
        "contentVi": [
          "UNICORN MODEL"
        ],
        "contentEn": [
          "UNICORN MODEL"
        ],
        "imageUrl": "/pdf_assets/unicorn_model/page_1.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 1/7)",
        "captionEn": "Detailed chart analysis diagram (Page 1/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 1): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 1): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Unicorn Model",
        "headingEn": "Unicorn Model",
        "contentVi": [
          "Unicorn Model",
          "Fair Value Gaps",
          "Breaker Blocks",
          "Unicorn"
        ],
        "contentEn": [
          "Unicorn Model",
          "Fair Value Gaps",
          "Breaker Blocks",
          "Unicorn"
        ],
        "imageUrl": "/pdf_assets/unicorn_model/page_2.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 2/7)",
        "captionEn": "Detailed chart analysis diagram (Page 2/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 2): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 2): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Fair Value Gaps",
        "headingEn": "Fair Value Gaps",
        "contentVi": [
          "Fair Value Gaps",
          "Bearish",
          "Khoảng trống giá FVG",
          "Bullish",
          "Khoảng trống giá FVG"
        ],
        "contentEn": [
          "Fair Value Gaps",
          "Bearish",
          "Fair Value Gap",
          "Bullish",
          "Fair Value Gap"
        ],
        "imageUrl": "/pdf_assets/unicorn_model/page_3.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 3/7)",
        "captionEn": "Detailed chart analysis diagram (Page 3/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 3): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 3): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Breaker Blocks",
        "headingEn": "Breaker Blocks",
        "contentVi": [
          "Breaker Blocks",
          "Bearish",
          "Khối Breaker Block",
          "Bullish",
          "Khối Breaker Block"
        ],
        "contentEn": [
          "Breaker Blocks",
          "Bearish",
          "Breaker Block",
          "Bullish",
          "Breaker Block"
        ],
        "imageUrl": "/pdf_assets/unicorn_model/page_4.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 4/7)",
        "captionEn": "Detailed chart analysis diagram (Page 4/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 4): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 4): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Khối Breaker Block",
        "headingEn": "Breaker Block",
        "contentVi": [
          "Khối Breaker Block",
          "Bearish",
          "Khối Breaker Block",
          "Bullish",
          "Khối Breaker Block"
        ],
        "contentEn": [
          "Breaker Block",
          "Bearish",
          "Breaker Block",
          "Bullish",
          "Breaker Block"
        ],
        "imageUrl": "/pdf_assets/unicorn_model/page_5.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 5/7)",
        "captionEn": "Detailed chart analysis diagram (Page 5/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 5): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 5): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Unicorn",
        "headingEn": "Unicorn",
        "contentVi": [
          "Unicorn",
          "Bearish",
          "Khối Breaker Block",
          "+ FVG",
          "Bullish",
          "Khối Breaker Block",
          "+ FVG"
        ],
        "contentEn": [
          "Unicorn",
          "Bearish",
          "Breaker Block",
          "+ FVG",
          "Bullish",
          "Breaker Block",
          "+ FVG"
        ],
        "imageUrl": "/pdf_assets/unicorn_model/page_6.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 6/7)",
        "captionEn": "Detailed chart analysis diagram (Page 6/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 6): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 6): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      },
      {
        "headingVi": "Resources",
        "headingEn": "Resources",
        "contentVi": [
          "Resources",
          "Unicorn Video",
          "@4500px",
          "@Ash_Ketchum_21"
        ],
        "contentEn": [
          "Resources",
          "Unicorn Video",
          "@4500px",
          "@Ash_Ketchum_21"
        ],
        "imageUrl": "/pdf_assets/unicorn_model/page_7.png",
        "captionVi": "Sơ đồ biểu đồ phân tích (Trang 7/7)",
        "captionEn": "Detailed chart analysis diagram (Page 7/7)",
        "highlightBoxVi": "💡 Quy tắc ICT cốt lõi (Trang 7): Luôn kết hợp bối cảnh cấu trúc khung thời gian lớn (HTF) trước khi tìm kiếm vùng phản ứng.",
        "highlightBoxEn": "💡 Key ICT Rule (Page 7): Always align lower timeframe setups with Higher Timeframe (HTF) context."
      }
    ]
  }
};