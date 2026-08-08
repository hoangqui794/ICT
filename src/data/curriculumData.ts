export interface Topic {
  id: string;
  titleVi: string;
  titleEn: string;
  descriptionVi: string;
  descriptionEn: string;
  pdfFileName: string;
  pdfRelativePath: string;
  youtubeVideoId?: string;
  keyTakeawaysVi: string[];
  keyTakeawaysEn: string[];
  practicalExercisesVi: string[];
  practicalExercisesEn: string[];
}

export interface Module {
  id: string;
  number: string;
  titleVi: string;
  titleEn: string;
  subtitleVi: string;
  subtitleEn: string;
  icon: string;
  topics: Topic[];
}

export const CURRICULUM_DATA: Module[] = [
  {
    id: 'mod-1-liquidity',
    number: '01',
    titleVi: 'Đọc Thanh Khoản',
    titleEn: 'Reading Liquidity',
    subtitleVi: 'Hiểu nơi stop-loss thường tập trung và cách xác định draw on liquidity.',
    subtitleEn: 'Understand liquidity pools, buy/sell side liquidity and draw on liquidity.',
    icon: 'Droplets',
    topics: [
      {
        id: 'topic-buyside-sellside',
        titleVi: 'Thanh Khoản: Buyside & Sellside',
        titleEn: 'Liquidity: Buyside & Sellside',
        descriptionVi: 'Giới thiệu swing high/low, buyside liquidity, sellside liquidity, equal highs/lows và các high/low theo ngày, tuần, phiên.',
        descriptionEn: 'Introduction to swing high/low, buyside liquidity, sellside liquidity, equal highs/lows and session levels.',
        pdfFileName: 'Liquidity.pdf',
        pdfRelativePath: 'pdfs/Liquidity.pdf',
        youtubeVideoId: 'U8xH2dEgH5A',
        keyTakeawaysVi: [
          'Stop của lệnh short thường tạo buyside liquidity (BSL) phía trên swing high.',
          'Stop của lệnh long thường tạo sellside liquidity (SSL) phía dưới swing low.',
          'PDH/PDL, PWH/PWL và session highs/lows có thể đóng vai trò là draw on liquidity.'
        ],
        keyTakeawaysEn: [
          'Short stop-losses rest as buyside liquidity (BSL) above swing highs.',
          'Long stop-losses rest as sellside liquidity (SSL) below swing lows.',
          'PDH/PDL, PWH/PWL and session highs/lows often act as key draw on liquidity.'
        ],
        practicalExercisesVi: [
          'Đánh dấu PDH (Previous Day High) và PDL (Previous Day Low) trên biểu đồ 15m.',
          'Tìm 3 ví dụ về Equal Highs (EQH) hoặc Equal Lows (EQL) rồi quan sát phản ứng giá khi bị quét.'
        ],
        practicalExercisesEn: [
          'Mark PDH (Previous Day High) and PDL (Previous Day Low) on a 15m chart.',
          'Find 3 examples of Equal Highs (EQH) or Equal Lows (EQL) and note price behavior post-sweep.'
        ]
      },
      {
        id: 'topic-liquidity-levels',
        titleVi: 'Các Mức Thanh Khoản Quan Trọng',
        titleEn: 'Important Liquidity Levels',
        descriptionVi: 'Chi tiết phân loại các đỉnh đáy ngày, tuần, phiên và thứ tự ưu tiên hút giá.',
        descriptionEn: 'Detailed classification of daily, weekly, session highs/lows and draw priority.',
        pdfFileName: 'Important_Liquidity_Levels.pdf',
        pdfRelativePath: 'pdfs/Important_Liquidity_Levels.pdf',
        youtubeVideoId: 'YESqIoA7Wyg',
        keyTakeawaysVi: [
          'Đỉnh/Đáy ngày cũ (PDH/PDL) là vùng thanh khoản rất mạnh.',
          'Thanh khoản phiên Châu Á thường bị quét ở phiên Châu Âu hoặc New York.'
        ],
        keyTakeawaysEn: [
          'Previous Day High/Low (PDH/PDL) hold significant liquidity.',
          'Asian Session liquidity is frequently swept during London or New York sessions.'
        ],
        practicalExercisesVi: [
          'Vẽ khung phiên Asia High/Low cho 3 ngày liên tiếp.'
        ],
        practicalExercisesEn: [
          'Draw Asian Session High/Low boxes for 3 consecutive days.'
        ]
      },
      {
        id: 'topic-irl-erl',
        titleVi: 'Thanh Khoản IRL & ERL',
        titleEn: 'Internal & External Range Liquidity',
        descriptionVi: 'Mối quan hệ luân chuyển giá giữa Internal Range Liquidity (FVG) và External Range Liquidity (Old High/Low).',
        descriptionEn: 'Price delivery cycle between Internal Range Liquidity (FVG) and External Range Liquidity (Old High/Low).',
        pdfFileName: 'IRL-ERL.pdf',
        pdfRelativePath: 'pdfs/IRL-ERL.pdf',
        youtubeVideoId: '3OivsP1j_UE',
        keyTakeawaysVi: [
          'Giá di chuyển từ ERL (quét đỉnh/đáy) về tìm IRL (FVG/OB) và ngược lại.',
          'Khi ERL bị quét, mục tiêu tiếp theo thường là tìm tìm vùng cân bằng IRL.'
        ],
        keyTakeawaysEn: [
          'Price cycles from ERL (Old High/Low) back to IRL (FVG/OB) and vice versa.',
          'Post ERL sweep, price often seeks internal balance (IRL).'
        ],
        practicalExercisesVi: [
          'Xác định 1 chu kỳ giá đi từ ERL về IRL trên khung H1.'
        ],
        practicalExercisesEn: [
          'Identify 1 full price cycle from ERL to IRL on the H1 chart.'
        ]
      },
      {
        id: 'topic-discount-premium',
        titleVi: 'Vùng Giá Discount & Premium',
        titleEn: 'Discount & Premium Pricing',
        descriptionVi: 'Đo khoảng giá swing range bằng Fibonacci 0.5 để xác định vùng mua rẻ (Discount) và bán đắt (Premium).',
        descriptionEn: 'Measure dealing range with 0.5 Fibonacci to identify buying low (Discount) and selling high (Premium).',
        pdfFileName: 'Discount__Premium.pdf',
        pdfRelativePath: 'pdfs/Discount__Premium.pdf',
        youtubeVideoId: 'MlMsG7li9zY',
        keyTakeawaysVi: [
          'Chỉ nên canh Mua ở vùng Discount (dưới mốc 50% Equilibrium).',
          'Chỉ nên canh Bán ở vùng Premium (trên mốc 50% Equilibrium).'
        ],
        keyTakeawaysEn: [
          'Only seek Buy setups in Discount (below 50% Equilibrium).',
          'Only seek Sell setups in Premium (above 50% Equilibrium).'
        ],
        practicalExercisesVi: [
          'Kéo Fibo từ Swing Low lên Swing High và xác định mốc 0.5 Equilibrium.'
        ],
        practicalExercisesEn: [
          'Apply Fibo tool from Swing Low to Swing High and identify 0.5 Equilibrium.'
        ]
      }
    ]
  },
  {
    id: 'mod-2-bias',
    number: '02',
    titleVi: 'Xây Bias',
    titleEn: 'Building Daily Bias',
    subtitleVi: 'Dùng high/low cũ, failure to displace, thời gian và tương quan ES/NQ để tạo kịch bản.',
    subtitleEn: 'Use old highs/lows, failure to displace, time & SMT correlation to build daily bias.',
    icon: 'Compass',
    topics: [
      {
        id: 'topic-daily-bias',
        titleVi: 'Daily Bias (Xu Hướng Ngày)',
        titleEn: 'Daily Bias Framework',
        descriptionVi: 'Cách phân tích nến Daily cũ để dự đoán hướng đi của nến Daily hôm nay.',
        descriptionEn: 'Analyze previous Daily candles to forecast today\'s candle expansion direction.',
        pdfFileName: 'Daily_Bias.pdf',
        pdfRelativePath: 'pdfs/Daily_Bias.pdf',
        youtubeVideoId: 'g3oDYq4P9ZE',
        keyTakeawaysVi: [
          'Nếu nến Daily cũ rút chân quét SSL và đóng cửa tăng, Bias hôm nay ưu tiên Tăng.',
          'Xác định draw on liquidity gần nhất trên khung Daily.'
        ],
        keyTakeawaysEn: [
          'If yesterday swept SSL and closed bullish, bias leans Bullish today.',
          'Locate the nearest Daily draw on liquidity target.'
        ],
        practicalExercisesVi: [
          'Phân tích 5 nến Daily gần nhất và đưa ra nhận định Bias cho nến kế tiếp.'
        ],
        practicalExercisesEn: [
          'Analyze the last 5 Daily candles and form a direction bias for the next.'
        ]
      },
      {
        id: 'topic-intraday-bias',
        titleVi: 'Intraday Bias (Xu Hướng Trong Ngày)',
        titleEn: 'Intraday Bias & Execution',
        descriptionVi: 'Kết hợp phiên Asia và London để chốt bias cho phiên New York.',
        descriptionEn: 'Combine Asian and London session price action to confirm New York bias.',
        pdfFileName: 'Intraday_Bias.pdf',
        pdfRelativePath: 'pdfs/Intraday_Bias.pdf',
        youtubeVideoId: 'JxPpYDd_w7s',
        keyTakeawaysVi: [
          'Phiên London tạo Judast Swing quét đỉnh/đáy sẽ cho điểm vào đẹp phiên NY.'
        ],
        keyTakeawaysEn: [
          'London Judas Swing often sets up the optimal New York entry direction.'
        ],
        practicalExercisesVi: [
          'Ghi nhận hướng di chuyển của phiên London và New York trong 3 ngày.'
        ],
        practicalExercisesEn: [
          'Track London vs New York directional alignment across 3 days.'
        ]
      },
      {
        id: 'topic-killzones',
        titleVi: 'ICT Killzones & Thời Gian',
        titleEn: 'ICT Killzones & Time Windows',
        descriptionVi: 'Các mốc thời gian phiên giao dịch quan trọng: London, NY Open, London Close.',
        descriptionEn: 'Key algorithmic execution windows: London, NY Open, London Close.',
        pdfFileName: 'Killzones.pdf',
        pdfRelativePath: 'pdfs/Killzones.pdf',
        youtubeVideoId: 'MPeeE55rNOw',
        keyTakeawaysVi: [
          'Thời gian luôn quan trọng hơn giá (Time first, then Price).',
          'NY Killzone: 7:00 AM - 10:00 AM EST.'
        ],
        keyTakeawaysEn: [
          'Time takes priority over price (Time first, then Price).',
          'NY Killzone: 7:00 AM - 10:00 AM EST.'
        ],
        practicalExercisesVi: [
          'Cài đặt indicator Hộp phiên trên TradingView và kiểm tra biến động trong Killzone.'
        ],
        practicalExercisesEn: [
          'Enable Session Box indicator and monitor price expansion inside Killzones.'
        ]
      },
      {
        id: 'topic-relative-strength',
        titleVi: 'Sức Mạnh Tương Quan: ES vs NQ',
        titleEn: 'Relative Strength: ES vs NQ',
        descriptionVi: 'So sánh chỉ số S&P500 (ES) và Nasdaq (NQ) để tìm mã mạnh hơn/yếu hơn.',
        descriptionEn: 'Compare S&P500 (ES) and Nasdaq (NQ) to pick the stronger/weaker asset.',
        pdfFileName: 'Relative_Strength_ES.NQ.pdf',
        pdfRelativePath: 'pdfs/Relative_Strength_ES.NQ.pdf',
        youtubeVideoId: 'c_mh19e3mhI',
        keyTakeawaysVi: [
          'Mã tạo đỉnh cao hơn khi thị trường chung chưa tạo đỉnh là mã dẫn dắt sức mạnh.'
        ],
        keyTakeawaysEn: [
          'Asset making higher highs while baseline index lags shows relative strength.'
        ],
        practicalExercisesVi: [
          'Mở 2 chart ES và NQ song song trên TradingView để so sánh cấu trúc.'
        ],
        practicalExercisesEn: [
          'Open ES and NQ charts side-by-side on TradingView to compare swing structures.'
        ]
      },
      {
        id: 'topic-smt',
        titleVi: 'Phân Kỳ SMT (SMT Divergence)',
        titleEn: 'SMT Divergence Analysis',
        descriptionVi: 'Phát hiện sự không đồng nhất đỉnh/đáy giữa 2 tài sản tương quan (ES/NQ hoặc EUR/GBP).',
        descriptionEn: 'Spot high/low non-confirmation between correlated asset pairs (ES/NQ or EUR/GBP).',
        pdfFileName: 'SMT.pdf',
        pdfRelativePath: 'pdfs/SMT.pdf',
        youtubeVideoId: '27S9gjgcSlI',
        keyTakeawaysVi: [
          'SMT tại mốc thanh khoản quan trọng báo hiệu thuật toán chuẩn bị đảo chiều mạnh.'
        ],
        keyTakeawaysEn: [
          'SMT at key liquidity levels signals imminent algorithmic reversal.'
        ],
        practicalExercisesVi: [
          'Tìm 1 ví dụ SMT Divergence giữa ES và NQ tại phiên London.'
        ],
        practicalExercisesEn: [
          'Locate 1 SMT Divergence setup between ES and NQ during London session.'
        ]
      }
    ]
  },
  {
    id: 'mod-3-change',
    number: '03',
    titleVi: 'Đọc Sự Thay Đổi',
    titleEn: 'Reading Shifts & Delivery',
    subtitleVi: 'Nhận biết Market Structure Shift (MSS), CISD và phân biệt phá thật vs quét thanh khoản.',
    subtitleEn: 'Identify Market Structure Shift (MSS), CISD and distinguish real breaks vs sweeps.',
    icon: 'RefreshCw',
    topics: [
      {
        id: 'topic-cisd',
        titleVi: 'Thay Đổi Trạng Thái Giao Giá (CISD)',
        titleEn: 'Change in State of Delivery (CISD)',
        descriptionVi: 'Dấu hiệu sớm nhất khi thuật toán chuyển từ trạng thái mua sang bán hoặc ngược lại.',
        descriptionEn: 'The earliest algorithmic signal transitioning from buy to sell delivery.',
        pdfFileName: 'CISD.pdf',
        pdfRelativePath: 'pdfs/CISD.pdf',
        youtubeVideoId: 'U8xH2dEgH5A',
        keyTakeawaysVi: [
          'CISD xảy ra khi giá phá qua cây nến tăng/giảm cuối cùng trước khi quét thanh khoản.'
        ],
        keyTakeawaysEn: [
          'CISD occurs when price closes past the last opposing candle prior to liquidity sweep.'
        ],
        practicalExercisesVi: [
          'Đánh dấu điểm CISD sau khi giá vừa quét SSL.'
        ],
        practicalExercisesEn: [
          'Mark the CISD level immediately following an SSL sweep.'
        ]
      },
      {
        id: 'topic-mss',
        titleVi: 'Dịch Chuyển Cấu Trúc (MSS)',
        titleEn: 'Market Structure Shift (MSS)',
        descriptionVi: 'Phá vỡ cấu trúc đỉnh/đáy gần nhất kèm nến thân lớn (Displacement).',
        descriptionEn: 'Breaking the key swing high/low accompanied by strong Displacement.',
        pdfFileName: 'Market_Structure_Shift.pdf',
        pdfRelativePath: 'pdfs/Market_Structure_Shift.pdf',
        youtubeVideoId: '_94CPMjWi9E',
        keyTakeawaysVi: [
          'MSS bắt buộc phải có Displacement (thân nến lớn và tạo FVG).'
        ],
        keyTakeawaysEn: [
          'MSS requires strong Displacement (large candle bodies creating FVGs).'
        ],
        practicalExercisesVi: [
          'Xác định MSS và FVG đi kèm trên khung 5m.'
        ],
        practicalExercisesEn: [
          'Identify an MSS with its accompanying FVG on the 5m chart.'
        ]
      },
      {
        id: 'topic-mss-vs-cisd',
        titleVi: 'So Sánh MSS vs CISD',
        titleEn: 'MSS vs CISD Comparison',
        descriptionVi: 'Phân biệt điểm vào lệnh sớm CISD và điểm vào lệnh xác nhận MSS.',
        descriptionEn: 'Differentiate early entry (CISD) vs full confirmation entry (MSS).',
        pdfFileName: 'MSS_vs_CISD.pdf',
        pdfRelativePath: 'pdfs/MSS_vs_CISD.pdf',
        youtubeVideoId: 'E89d1HArbgM',
        keyTakeawaysVi: [
          'CISD xuất hiện sớm hơn MSS, mang lại Risk/Reward tốt hơn nhưng cần kịch bản chắc chắn.'
        ],
        keyTakeawaysEn: [
          'CISD occurs earlier than MSS, offering better R:R but requires higher HTF conviction.'
        ],
        practicalExercisesVi: [
          'So sánh khoảng cách Stop Loss khi vào lệnh theo CISD và MSS.'
        ],
        practicalExercisesEn: [
          'Compare Stop Loss distance for CISD vs MSS entry triggers.'
        ]
      },
      {
        id: 'topic-mss-vs-liquidity-grab',
        titleVi: 'Phá Thật (MSS) vs Quét Thanh Khoản',
        titleEn: 'Real MSS vs Liquidity Sweep',
        descriptionVi: 'Tránh bẫy phá vỡ giả (Liquidity Grab) khi râu nến vượt qua đỉnh nhưng thân nến đóng ngược lại.',
        descriptionEn: 'Avoid fakeout traps when wicks pierce swing highs but bodies close inside.',
        pdfFileName: 'MSS_vs_Liquidity_Grab.pdf',
        pdfRelativePath: 'pdfs/MSS_vs_Liquidity_Grab.pdf',
        youtubeVideoId: 'ynFA6E3qHj0',
        keyTakeawaysVi: [
          'Thân nến thể hiện ý chí thuật toán (Bodies tell the story, wicks do the damage).'
        ],
        keyTakeawaysEn: [
          'Candle bodies reveal intent (Bodies tell the story, wicks do the damage).'
        ],
        practicalExercisesVi: [
          'Tìm 2 trường hợp nến chỉ thò râu quét đỉnh rồi đảo chiều ngay lập tức.'
        ],
        practicalExercisesEn: [
          'Find 2 instances where wicks sweep highs and immediately reverse.'
        ]
      }
    ]
  },
  {
    id: 'mod-4-entry',
    number: '04',
    titleVi: 'Chọn Vùng Entry',
    titleEn: 'Entry Zone Models',
    subtitleVi: 'Chi tiết Orderblock, Breaker, Mitigation, Inversion FVG và OTE.',
    subtitleEn: 'Deep dive into Orderblocks, Breaker Blocks, Mitigation, Inversion FVG and OTE.',
    icon: 'Target',
    topics: [
      {
        id: 'topic-fvg',
        titleVi: 'Fair Value Gaps (FVG)',
        titleEn: 'Fair Value Gaps (FVG)',
        descriptionVi: 'Khoảng trống giá mất cân bằng 3 nến và cách dùng Consequent Encroachment (0.5 CE).',
        descriptionEn: '3-candle imbalance gap and how to trade Consequent Encroachment (0.5 CE).',
        pdfFileName: 'Fair_Value_Gaps.pdf',
        pdfRelativePath: 'pdfs/Fair_Value_Gaps.pdf',
        youtubeVideoId: 'ZVUDpCyvxfQ',
        keyTakeawaysVi: [
          'BISI (Bullish FVG) & SIBI (Bearish FVG).',
          'Mốc 50% (CE) của FVG là vùng nảy giá thuật toán rất mạnh.'
        ],
        keyTakeawaysEn: [
          'BISI (Bullish FVG) & SIBI (Bearish FVG).',
          'The 50% midpoint (CE) of FVG offers strong algorithmic reaction.'
        ],
        practicalExercisesVi: [
          'Đánh dấu FVG có displacement và FVG không có displacement; so sánh khả năng giữ giá.'
        ],
        practicalExercisesEn: [
          'Mark FVGs with displacement vs without; compare holding strength.'
        ]
      },
      {
        id: 'topic-orderblocks',
        titleVi: 'Khối Lệnh Orderblocks (OB)',
        titleEn: 'Orderblocks (OB)',
        descriptionVi: 'Nến tăng/giảm cuối cùng trước khi có đợt đẩy giá mạnh làm phá vỡ cấu trúc.',
        descriptionEn: 'The last opposing candle prior to aggressive expansion breaking structure.',
        pdfFileName: 'Orderblocks.pdf',
        pdfRelativePath: 'pdfs/Orderblocks.pdf',
        youtubeVideoId: 'DMUiDBnTYc8',
        keyTakeawaysVi: [
          'Mean Threshold (50% thân nến OB) không được phép bị nến đóng cửa vượt qua.'
        ],
        keyTakeawaysEn: [
          'Mean Threshold (50% OB body) should not be closed beyond by candle bodies.'
        ],
        practicalExercisesVi: [
          'Kéo Fibo 0.5 lên thân nến OB và quan sát phản ứng giá tại Mean Threshold.'
        ],
        practicalExercisesEn: [
          'Apply 0.5 Fibo to OB body and observe price reaction at Mean Threshold.'
        ]
      },
      {
        id: 'topic-breaker-blocks',
        titleVi: 'Khối Phá Vỡ Breaker Blocks',
        titleEn: 'Breaker Blocks',
        descriptionVi: 'Nến bị quét thanh khoản thất bại biến thành vùng hỗ trợ/kháng cự cực mạnh.',
        descriptionEn: 'Failed orderblock that swept liquidity turning into high-probability zone.',
        pdfFileName: 'BreakerBlocks.pdf',
        pdfRelativePath: 'pdfs/BreakerBlocks.pdf',
        youtubeVideoId: '75S4vwD4P1U',
        keyTakeawaysVi: [
          'Breaker Block luôn đi kèm với đợt quét đỉnh/đáy (Liquidity Sweep).'
        ],
        keyTakeawaysEn: [
          'Breaker Blocks always involve a prior Liquidity Sweep.'
        ],
        practicalExercisesVi: [
          'Vẽ 1 Breaker Block tăng giá (Bullish Breaker) sau khi giá quét SSL.'
        ],
        practicalExercisesEn: [
          'Draw 1 Bullish Breaker Block after an SSL sweep.'
        ]
      },
      {
        id: 'topic-mitigation-blocks',
        titleVi: 'Khối Giảm Thải Mitigation Blocks',
        titleEn: 'Mitigation Blocks',
        descriptionVi: 'Tương tự Breaker nhưng không có hành động quét đỉnh/đáy cũ.',
        descriptionEn: 'Similar to Breaker Block but without sweeping previous swing high/low.',
        pdfFileName: 'Mitigation_Blocks.pdf',
        pdfRelativePath: 'pdfs/Mitigation_Blocks.pdf',
        youtubeVideoId: 'bbWPoajy2MY',
        keyTakeawaysVi: [
          'Mitigation Block xuất hiện trong xu hướng có lực đi mạnh (Failure Sweep).'
        ],
        keyTakeawaysEn: [
          'Mitigation Blocks form during strong trending legs (Failure Sweep).'
        ],
        practicalExercisesVi: [
          'So sánh sự khác nhau giữa Breaker và Mitigation trên cùng 1 biểu đồ.'
        ],
        practicalExercisesEn: [
          'Compare Breaker vs Mitigation Block differences on a chart.'
        ]
      },
      {
        id: 'topic-inversion-fvg',
        titleVi: 'Inversion FVG (Đổi Vai Trò FVG)',
        titleEn: 'Inversion FVG (IFVG)',
        descriptionVi: 'Khoảng trống FVG bị giá đâm xuyên qua và đổi vai trò thành vùng cản mới.',
        descriptionEn: 'An FVG violated by price that flips support/resistance roles.',
        pdfFileName: 'Inversion.pdf',
        pdfRelativePath: 'pdfs/Inversion.pdf',
        youtubeVideoId: 'uDJI2AbyyCs',
        keyTakeawaysVi: [
          'Bullish FVG bị đâm xuyên qua sẽ biến thành Bearish Inversion FVG.'
        ],
        keyTakeawaysEn: [
          'A Bullish FVG pierced through becomes a Bearish Inversion FVG.'
        ],
        practicalExercisesVi: [
          'Tìm 1 ví dụ giá quay lại retest Inversion FVG rồi nảy giá tiếp diễn.'
        ],
        practicalExercisesEn: [
          'Locate 1 example of price retesting an Inversion FVG for continuation.'
        ]
      },
      {
        id: 'topic-ote',
        titleVi: 'Tối Ưu Điểm Vào Lệnh OTE (Optimal Trade Entry)',
        titleEn: 'Optimal Trade Entry (OTE)',
        descriptionVi: 'Vùng vào lệnh vàng Fibonacci 0.62 - 0.705 - 0.79.',
        descriptionEn: 'The golden Fibonacci entry zone of 0.62 - 0.705 - 0.79.',
        pdfFileName: 'OTE.pdf',
        pdfRelativePath: 'pdfs/OTE.pdf',
        youtubeVideoId: '1YRs4Z1lMws',
        keyTakeawaysVi: [
          'Mốc 0.705 là mốc Sweet Spot chuẩn mực nhất của ICT OTE.'
        ],
        keyTakeawaysEn: [
          'The 0.705 level represents the classic ICT OTE Sweet Spot.'
        ],
        practicalExercisesVi: [
          'Cài đặt công cụ Fibonacci với các mốc OTE: 0.62, 0.705, 0.79 và -0.27 (TP1).'
        ],
        practicalExercisesEn: [
          'Configure Fibonacci tool with OTE levels: 0.62, 0.705, 0.79 and -0.27 (TP1).'
        ]
      }
    ]
  },
  {
    id: 'mod-5-models',
    number: '05',
    titleVi: 'Ghép Model & Quản Trị Rủi Ro',
    titleEn: 'ICT Models & Risk Management',
    subtitleVi: 'Thực chiến với các Model kinh điển: Silver Bullet, Unicorn, Son\'s Model, TTRS & Quản lý vốn.',
    subtitleEn: 'Master mechanical models: Silver Bullet, Unicorn, Son\'s Model, TTRS & Position Sizing.',
    icon: 'ShieldAlert',
    topics: [
      {
        id: 'topic-silver-bullet',
        titleVi: 'ICT Silver Bullet AM/PM Model',
        titleEn: 'ICT Silver Bullet Model',
        descriptionVi: 'Chiến thuật giao dịch khung giờ vàng 10:00 AM - 11:00 AM NY.',
        descriptionEn: 'The high-probability 10:00 AM - 11:00 AM NY hour trading model.',
        pdfFileName: 'Silver_Bullet_AM.pdf',
        pdfRelativePath: 'pdfs/Silver_Bullet_AM.pdf',
        youtubeVideoId: 'o0v4KQxZbpU',
        keyTakeawaysVi: [
          'Chỉ tìm kiếm 1 FVG hình thành trong khoảng thời gian 10:00 - 11:00 AM EST.'
        ],
        keyTakeawaysEn: [
          'Only target 1 FVG formed strictly between 10:00 - 11:00 AM EST.'
        ],
        practicalExercisesVi: [
          'Backtest 5 phiên Silver Bullet AM gần nhất và đo tỷ lệ R:R đạt được.'
        ],
        practicalExercisesEn: [
          'Backtest the last 5 Silver Bullet AM sessions and calculate achieved R:R.'
        ]
      },
      {
        id: 'topic-unicorn-model',
        titleVi: 'Mô Hình Kỳ Lân (Unicorn Model)',
        titleEn: 'Unicorn Model (Breaker + FVG)',
        descriptionVi: 'Sự kết hợp hoàn hảo giữa Breaker Block và Fair Value Gap xếp chồng.',
        descriptionEn: 'The high-confluence overlap of Breaker Block + Fair Value Gap.',
        pdfFileName: 'Unicorn_Model.pdf',
        pdfRelativePath: 'pdfs/Unicorn_Model.pdf',
        youtubeVideoId: 'plzIQxLXNzo',
        keyTakeawaysVi: [
          'Unicorn Model có xác suất thắng cao nhất trong tất cả các setup ICT.'
        ],
        keyTakeawaysEn: [
          'Unicorn Model carries the highest win-rate among all ICT setups.'
        ],
        practicalExercisesVi: [
          'Đánh dấu 1 vùng Unicorn (nơi Breaker nằm trùng đúng vị trí với FVG).'
        ],
        practicalExercisesEn: [
          'Highlight 1 Unicorn setup where Breaker overlaps directly with FVG.'
        ]
      },
      {
        id: 'topic-sons-model',
        titleVi: "Mô Hình Son's Model",
        titleEn: "Son's Model Setup",
        descriptionVi: 'Model giao dịch đảo chiều kết hợp giữa Liquidity Sweep, MSS và OTE.',
        descriptionEn: 'Reversal model combining Liquidity Sweep, MSS and OTE entry.',
        pdfFileName: 'Sons_Model.pdf',
        pdfRelativePath: 'pdfs/Sons_Model.pdf',
        youtubeVideoId: 'q40pRwjuPYQ',
        keyTakeawaysVi: [
          'Chờ quét HTF Liquidity $\\rightarrow$ MSS $\\rightarrow$ Retest FVG/OTE.'
        ],
        keyTakeawaysEn: [
          'Wait for HTF Liquidity Sweep $\\rightarrow$ MSS $\\rightarrow$ FVG/OTE Retest.'
        ],
        practicalExercisesVi: [
          'Vẽ lại sơ đồ các bước thực thi Son\'s Model trên chart thực tế.'
        ],
        practicalExercisesEn: [
          'Map out execution steps for Son\'s Model on a live chart.'
        ]
      },
      {
        id: 'topic-ttrs',
        titleVi: 'Chuỗi Đảo Chiều TTRS (TTrades Reversal)',
        titleEn: 'TTrades Reversal Sequence (TTRS)',
        descriptionVi: 'Quy trình 4 bước chuẩn hóa để bắt các đợt đảo chiều xu hướng.',
        descriptionEn: 'Mechanical 4-step framework to capture trend reversals cleanly.',
        pdfFileName: 'TTrades Reversal Sequence (TTRS).pdf',
        pdfRelativePath: 'pdfs/TTrades_Reversal_Sequence__TTRS_.pdf',
        youtubeVideoId: 'wik00c9_2nk',
        keyTakeawaysVi: [
          'Bước 1: Sweeps $\\rightarrow$ Bước 2: CISD $\\rightarrow$ Bước 3: MSS $\\rightarrow$ Bước 4: Delivery.'
        ],
        keyTakeawaysEn: [
          'Step 1: Sweeps $\\rightarrow$ Step 2: CISD $\\rightarrow$ Step 3: MSS $\\rightarrow$ Step 4: Delivery.'
        ],
        practicalExercisesVi: [
          'Kiểm tra 1 chuỗi TTRS hoàn chỉnh từ bước 1 đến bước 4.'
        ],
        practicalExercisesEn: [
          'Verify a full TTRS sequence from step 1 through step 4.'
        ]
      },
      {
        id: 'topic-position-sizing',
        titleVi: 'Quản Lý Vốn & Tính Size Lệnh',
        titleEn: 'Position Sizing & Risk Rules',
        descriptionVi: 'Quy tắc rủi ro 1% trên mỗi lệnh, tính lot/hợp đồng và quản lý tâm lý giao dịch.',
        descriptionEn: '1% risk rule per trade, position sizing math, and trading psychology.',
        pdfFileName: 'Position_Sizing.pdf',
        pdfRelativePath: 'pdfs/Position_Sizing.pdf',
        youtubeVideoId: '0OjlQ91TZiU',
        keyTakeawaysVi: [
          'Không bao giờ mạo hiểm quá 1% tài khoản trên một vị thế.',
          'Tính toán số lượng hợp đồng/lot dựa trên khoảng cách Stop Loss thực tế.'
        ],
        keyTakeawaysEn: [
          'Never risk more than 1% account equity per single trade.',
          'Calculate contract/lot size based on exact Stop Loss distance.'
        ],
        practicalExercisesVi: [
          'Tính thử số lot cho tài khoản $10,000 với mức dừng lỗ 15 pips.'
        ],
        practicalExercisesEn: [
          'Calculate position lot size for a $10,000 account with 15 pips SL.'
        ]
      }
    ]
  }
];
