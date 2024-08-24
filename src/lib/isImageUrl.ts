export function isImageUrl(url: string) {
  const imageExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".bmp",
    ".webp",
    ".svg",
    ".tiff",
    ".ico"
  ]

  const lowerCaseUrl = url.toLowerCase()

  return imageExtensions.some((extension) => lowerCaseUrl.endsWith(extension))
}
