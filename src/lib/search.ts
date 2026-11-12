/**
 * Chuẩn hóa chuỗi Tiếng Việt về dạng chữ thường không dấu (hỗ trợ cả NFC/NFD & Đ/đ)
 * phục vụ tìm kiếm tức thì trên kho game.
 */
export function normalizeVi(input: string): string {
  if (!input) return "";
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đð]/g, "d")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Tiền tính toán chỉ mục tìm kiếm không dấu trên Server để Client lọc 0ms.
 */
export function buildSearchIndex(fields: Array<string | undefined>): string {
  return normalizeVi(fields.filter(Boolean).join(" "));
}

/**
 * So khớp truy vấn người dùng (có dấu hoặc không dấu, nhiều từ khóa rời nhau)
 * với chỉ mục đã chuẩn hóa sẵn theo ranh giới từ chuẩn xác.
 */
export function matchesSearchQuery(searchIndex: string, rawQuery: string): boolean {
  if (!rawQuery || rawQuery.trim() === "") return true;
  const normalizedQuery = normalizeVi(rawQuery);
  if (!normalizedQuery) return false;
  if (searchIndex.includes(normalizedQuery)) return true;

  const words = searchIndex.split(" ");
  const tokens = normalizedQuery.split(" ");
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    const matched = words.some(
      (w) => w.startsWith(token) || (token.length >= 4 && w.includes(token))
    );
    if (!matched) {
      return false;
    }
  }
  return true;
}
