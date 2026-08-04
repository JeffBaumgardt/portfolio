import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Jeff Baumgardt — Senior Full-Stack Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					justifyContent: "flex-end",
					padding: 72,
					background: "linear-gradient(145deg, #06080c 0%, #0f1a28 55%, #0a2a28 100%)",
					color: "#e9edf3",
					fontFamily: "system-ui, sans-serif",
				}}
			>
				<div
					style={{
						fontSize: 22,
						letterSpacing: "0.22em",
						textTransform: "uppercase",
						color: "#5ee4c8",
						marginBottom: 20,
					}}
				>
					Denver · Full-Stack
				</div>
				<div
					style={{
						fontSize: 76,
						fontWeight: 700,
						letterSpacing: "-0.03em",
						lineHeight: 1,
						maxWidth: 900,
					}}
				>
					Jeff Baumgardt
				</div>
				<div style={{ marginTop: 24, fontSize: 28, color: "#93a0b5", maxWidth: 720 }}>
					Senior engineer — React, Next.js, payments, auth, real-time, AI
				</div>
			</div>
		),
		{ ...size },
	)
}
