# 生成 Open Graph / Twitter 分享封面（1200×630 PNG）
# 站点不引入图片素材，这张图由脚本绘制，改文案后重跑即可得到新图。
#   用法（在 F:\WEB 下）：powershell -File scripts/gen-og-cover.ps1
#   注意：本文件必须保存为「带 BOM 的 UTF-8」，否则 Windows PowerShell 5.1 会按 ANSI 读成乱码
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$out  = Join-Path $root 'assets\images\og-cover.png'
$W = 1200; $H = 630

$bmp = New-Object System.Drawing.Bitmap($W, $H, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$g   = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode      = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint  = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.InterpolationMode  = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

function C([string]$hex) { [System.Drawing.ColorTranslator]::FromHtml($hex) }

# ---------- 底色：石墨 + 青色柔光 ----------
$g.FillRectangle((New-Object System.Drawing.SolidBrush((C '#0c0f0f'))), 0, 0, $W, $H)
foreach ($spec in @(
    @{ x = 900; y = -140; r = 620; a = 44 },   # 右上青光
    @{ x = 120; y = 620;  r = 520; a = 26 }    # 左下青光
)) {
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $path.AddEllipse($spec.x - $spec.r, $spec.y - $spec.r, $spec.r * 2, $spec.r * 2)
    $brush = New-Object System.Drawing.Drawing2D.PathGradientBrush($path)
    $brush.CenterColor = [System.Drawing.Color]::FromArgb($spec.a, (C '#4bbfae'))
    $brush.SurroundColors = @([System.Drawing.Color]::FromArgb(0, (C '#4bbfae')))
    $g.FillPath($brush, $path)
    $brush.Dispose(); $path.Dispose()
}

# ---------- 细网格 ----------
$gridPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(16, 255, 255, 255), 1)
for ($x = 0; $x -lt $W; $x += 60) { $g.DrawLine($gridPen, $x, 0, $x, $H) }
for ($y = 0; $y -lt $H; $y += 60) { $g.DrawLine($gridPen, 0, $y, $W, $y) }
$gridPen.Dispose()

# ---------- 品牌标记：青色圆角方 + < > 括号 ----------
$markBrush = New-Object System.Drawing.SolidBrush((C '#14655e'))
$g.FillRectangle($markBrush, 90, 84, 54, 54)
$markBrush.Dispose()
$markPen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, 5)
$markPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
$markPen.EndCap   = [System.Drawing.Drawing2D.LineCap]::Round
$g.DrawLines($markPen, @(
    (New-Object System.Drawing.PointF(108, 100)),
    (New-Object System.Drawing.PointF(97, 111)),
    (New-Object System.Drawing.PointF(108, 122))
))
$g.DrawLines($markPen, @(
    (New-Object System.Drawing.PointF(126, 100)),
    (New-Object System.Drawing.PointF(137, 111)),
    (New-Object System.Drawing.PointF(126, 122))
))
$markPen.Dispose()

# ---------- 站点名（中文用雅黑；末三字改成青色） ----------
$h1Font  = New-Object System.Drawing.Font('Microsoft YaHei', 52, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$subFont = New-Object System.Drawing.Font('Microsoft YaHei', 22, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$staFont = New-Object System.Drawing.Font('Consolas',       22, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$lblFont = New-Object System.Drawing.Font('Microsoft YaHei', 17, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)
$enFont  = New-Object System.Drawing.Font('Segoe UI',       19, [System.Drawing.FontStyle]::Regular, [System.Drawing.GraphicsUnit]::Pixel)

$white = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$teal  = New-Object System.Drawing.SolidBrush((C '#4bbfae'))
$dim   = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(215, 255, 255, 255))
$faint = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(140, 255, 255, 255))

$y = 210
$g.DrawString('YYRMM', $h1Font, $white, 90, $y)
$nameW = $g.MeasureString('YYRMM', $h1Font).Width
$g.DrawString('的软件库', $h1Font, $teal, 90 + $nameW - 14, $y)

$g.DrawString('个人软件作品集 · 中英双语 · 深浅双主题', $subFont, $dim, 96, $y + 86)
$g.DrawString('Software portfolio — bilingual, dual theme, fully static', $enFont, $faint, 96, $y + 122)

# ---------- 统计条 ----------
$stats = @(
    @{ v = '6';   l = '收录作品' },
    @{ v = '212'; l = '排障知识库' },
    @{ v = '626'; l = '单元测试' },
    @{ v = '57';  l = '精选插件' }
)
$barY = 452
$barPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(40, 255, 255, 255), 1)
$g.DrawLine($barPen, 96, $barY - 34, $W - 96, $barY - 34)
$barPen.Dispose()
$x = 96
foreach ($s in $stats) {
    $g.DrawString($s.v, $staFont, $teal,  $x, $barY)
    $g.DrawString($s.l, $lblFont, $faint, $x, $barY + 36)
    $x += 258
}

# ---------- 右下角站点地址 ----------
$g.DrawString('yyrmmayo.github.io', $lblFont, $faint, $W - 330, $H - 60)

$h1Font.Dispose(); $subFont.Dispose(); $staFont.Dispose(); $lblFont.Dispose(); $enFont.Dispose()
$white.Dispose(); $teal.Dispose(); $dim.Dispose(); $faint.Dispose()
$g.Dispose()

$bmp.Save($out, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()
Write-Host ("wrote {0} ({1:N0} bytes)" -f $out, (Get-Item $out).Length)
