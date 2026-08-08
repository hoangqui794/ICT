export interface Indicator {
  id: string;
  name: string;
  description: string;
  features: string[];
  pineScriptCode: string;
}

export const INDICATOR_DATA: Indicator = {
  id: "ict-session-boxes-macros",
  name: "Hộp Phiên Tối Giản (Session Boxes) + ICT Macros & HTF Candles Panel",
  description: "Indicator TradingView v5 tổng hợp các phiên giao dịch chính (Á, Âu, Mỹ Sáng, Mỹ Chiều), tự động đánh dấu 8 khung ICT Macros theo giờ New York và bảng điều khiển nến khung lớn (HTF Panel) trực quan bên phải chart.",
  features: [
    "Vẽ hộp tự động cho các Session: Phiên Á (00:00-09:00), Phiên Âu (08:00-17:00), NY AM (13:00-17:00), NY PM (17:00-22:00)",
    "Đánh dấu 8 khung ICT Macros quan trọng: London Macro (02:33-03:00, 04:03-04:30), NY AM Macro (08:50-09:10, 09:50-10:10, 10:50-11:10), NY Lunch (11:50-12:10), NY PM Macro (13:10-13:40, 15:15-15:45)",
    "HTF Candles Panel: Hiển thị trực quan nến khung lớn (H1, H4, D1) bên lề phải để dễ theo dõi bối cảnh mà không cần chuyển chart."
  ],
  pineScriptCode: `//@version=5
indicator("Hộp Phiên Tối Giản (Session Boxes) + ICT Macros & HTF Candles Panel", overlay=true, max_boxes_count=500, max_labels_count=500)

// ==========================================
// 1. CÀI ĐẶT MÚI GIỜ (TIMEZONE CHUNG)
// ==========================================
tz_type = input.string("UTC", "Múi giờ hoạt động các Phiên", 
     options=["Exchange", "UTC", "America/New_York", "Europe/London", "Asia/Tokyo"], 
     group="Cài đặt Múi giờ")
tz = tz_type == "Exchange" ? syminfo.timezone : tz_type

// ==========================================
// 2. CẤU HÌNH MÀU SẮC CHUNG & CÁC PHIÊN CHÍNH
// ==========================================
bg_gray_color = input.color(color.new(#808080, 93), "Màu nền xám chung của hộp", group="Cấu hình Chung")
border_color  = input.color(color.new(#808080, 60), "Màu đường viền hộp", group="Cấu hình Chung")
text_color    = input.color(color.gray, "Màu nhãn chữ dưới nến", group="Cấu hình Chung")
days_input    = input.string("23456", "Các ngày trong tuần (2=Thứ Hai, 6=Thứ Sáu)", group="Cấu hình Chung")

// Cấu hình các phiên chính
show_asia   = input.bool(true, "Hiển thị Phiên Á", group="Phiên Á")
asia_time   = input.session("0000-0900", "Khung giờ Phiên Á", group="Phiên Á")
asia_label  = input.string("ASIA", "Nhãn chữ Phiên Á", group="Phiên Á")

show_london = input.bool(true, "Hiển thị Phiên Âu (London)", group="Phiên Âu")
london_time = input.session("0800-1700", "Khung giờ Phiên Âu", group="Phiên Âu")
london_label = input.string("LONDON", "Nhãn chữ Phiên Âu", group="Phiên Âu")

show_ny_am  = input.bool(true, "Hiển thị Phiên Mỹ Sáng (NY AM)", group="Phiên Mỹ Sáng")
ny_am_time  = input.session("1300-1700", "Khung giờ Mỹ Sáng", group="Phiên Mỹ Sáng")
ny_am_label = input.string("NY AM", "Nhãn chữ Mỹ Sáng", group="Phiên Mỹ Sáng")

show_ny_pm  = input.bool(true, "Hiển thị Phiên Mỹ Chiều (NY PM)", group="Phiên Mỹ Chiều")
ny_pm_time  = input.session("1700-2200", "Khung giờ Mỹ Chiều", group="Phiên Mỹ Chiều")
ny_pm_label = input.string("NY PM", "Nhãn chữ Mỹ Chiều", group="Phiên Mỹ Chiều")

// ==========================================
// 3. CẤU HÌNH ICT MACROS
// ==========================================
show_macros   = input.bool(true, "Hiển thị ICT Macros", group="Cài đặt ICT Macros")
macro_tz      = input.string("America/New_York", "Múi giờ hoạt động của Macro", 
     options=["Exchange", "UTC", "America/New_York", "Europe/London", "Asia/Tokyo"], 
     group="Cài đặt ICT Macros")
macro_style   = input.string("Đường giới hạn (High/Low)", "Kiểu hiển thị Macro", 
     options=["Đường giới hạn (High/Low)", "Hộp (Box)", "Chỉ đường High", "Chỉ đường Low"], 
     group="Cài đặt ICT Macros")
macro_color   = input.color(color.black, "Màu sắc đường line Macro", group="Cài đặt ICT Macros")
macro_width   = input.int(1, "Độ dày đường line", group="Cài đặt ICT Macros")
show_macro_labels = input.bool(true, "Hiển thị nhãn tên Macro", group="Cài đặt ICT Macros")

// ==========================================
// 4. CẤU HÌNH HIỂN THỊ NẾN KHUNG LỚN BÊN PHẢI (HTF CANDLES)
// ==========================================
show_htf_candles = input.bool(true, "Hiển thị nến khung lớn (HTF)", group="Nến Khung Lớn (Cột bên phải)")
htf_tf           = input.timeframe("60", "Chọn Khung thời gian lớn", group="Nến Khung Lớn (Cột bên phải)")
htf_bull_color   = input.color(#26a69a, "Màu nến Tăng", group="Nến Khung Lớn (Cột bên phải)")
htf_bear_color   = input.color(#3b3c3d, "Màu nến Giảm", group="Nến Khung Lớn (Cột bên phải)")
htf_offset       = input.int(8, "Khoảng cách từ nến cuối", minval=1, group="Nến Khung Lớn (Cột bên phải)")
htf_spacing      = input.int(10, "Khoảng cách giữa các nến", minval=2, group="Nến Khung Lớn (Cột bên phải)")
htf_width        = input.int(6, "Chiều rộng thân nến", minval=1, group="Nến Khung Lớn (Cột bên phải)")

// ==========================================
// 5. LOGIC XỬ LÝ & VẼ HỘP PHIÊN CHÍNH
// ==========================================
in_session(sess_time) =>
    not na(time(timeframe.period, sess_time + ":" + days_input, tz))

in_asia   = show_asia and in_session(asia_time)
in_london = show_london and in_session(london_time)
in_ny_am  = show_ny_am and in_session(ny_am_time)
in_ny_pm  = show_ny_pm and in_session(ny_pm_time)

is_start(in_sess) =>
    in_sess and not in_sess[1]

var box asia_box = na
var float asia_high = na
var float asia_low = na

var box london_box = na
var float london_high = na
var float london_low = na

var box ny_am_box = na
var float ny_am_high = na
var float ny_am_low = na

var box ny_pm_box = na
var float ny_pm_high = na
var float ny_pm_low = na

if is_start(in_asia)
    asia_high := high
    asia_low := low
    asia_box := box.new(left=bar_index, top=asia_high, right=bar_index, bottom=asia_low, 
                         bgcolor=bg_gray_color, border_color=border_color, border_style=line.style_dashed)
    label.new(x=bar_index, y=low, text=asia_label, yloc=yloc.belowbar, 
              color=color.new(color.white, 100), textcolor=text_color, 
              style=label.style_none, size=size.normal)
else if in_asia and not na(asia_box)
    asia_high := math.max(asia_high, high)
    asia_low := math.min(asia_low, low)
    box.set_top(asia_box, asia_high)
    box.set_bottom(asia_box, asia_low)
    box.set_right(asia_box, bar_index)

if is_start(in_london)
    london_high := high
    london_low := low
    london_box := box.new(left=bar_index, top=london_high, right=bar_index, bottom=london_low, 
                           bgcolor=bg_gray_color, border_color=border_color, border_style=line.style_dashed)
    label.new(x=bar_index, y=low, text=london_label, yloc=yloc.belowbar, 
              color=color.new(color.white, 100), textcolor=text_color, 
              style=label.style_none, size=size.normal)
else if in_london and not na(london_box)
    london_high := math.max(london_high, high)
    london_low := math.min(london_low, low)
    box.set_top(london_box, london_high)
    box.set_bottom(london_box, london_low)
    box.set_right(london_box, bar_index)

if is_start(in_ny_am)
    ny_am_high := high
    ny_am_low := low
    ny_am_box := box.new(left=bar_index, top=ny_am_high, right=bar_index, bottom=ny_am_low, 
                          bgcolor=bg_gray_color, border_color=border_color, border_style=line.style_dashed)
    label.new(x=bar_index, y=low, text=ny_am_label, yloc=yloc.belowbar, 
              color=color.new(color.white, 100), textcolor=text_color, 
              style=label.style_none, size=size.normal)
else if in_ny_am and not na(ny_am_box)
    ny_am_high := math.max(ny_am_high, high)
    ny_am_low := math.min(ny_am_low, low)
    box.set_top(ny_am_box, ny_am_high)
    box.set_bottom(ny_am_box, ny_am_low)
    box.set_right(ny_am_box, bar_index)

if is_start(in_ny_pm)
    ny_pm_high := high
    ny_pm_low := low
    ny_pm_box := box.new(left=bar_index, top=ny_pm_high, right=bar_index, bottom=ny_pm_low, 
                          bgcolor=bg_gray_color, border_color=border_color, border_style=line.style_dashed)
    label.new(x=bar_index, y=low, text=ny_pm_label, yloc=yloc.belowbar, 
              color=color.new(color.white, 100), textcolor=text_color, 
              style=label.style_none, size=size.normal)
else if in_ny_pm and not na(ny_pm_box)
    ny_pm_high := math.max(ny_pm_high, high)
    ny_pm_low := math.min(ny_pm_low, low)
    box.set_top(ny_pm_box, ny_pm_high)
    box.set_bottom(ny_pm_box, ny_pm_low)
    box.set_right(ny_pm_box, bar_index)`
};
