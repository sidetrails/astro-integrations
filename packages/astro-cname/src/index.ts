import fs from "node:fs/promises"
import { fileURLToPath } from "node:url"
import path from "node:path"
import {
  type AstroConfig,
  type AstroIntegration
} from "astro"

const OUTPUT_FILE = "CNAME"

export default function cname(): AstroIntegration {
  let config: AstroConfig

  return {
    name: "@sidetrails/astro-cname",
    hooks: {
      "astro:config:done": async({ config: c }) => {
        config = c
      },
      "astro:build:done": async({ dir, logger }) => {
        if (!config.site) {
          logger.warn(`The CNAME integration requires the \`site\` astro.config option. Skipping.`)
          return
        }

        const host = new URL(config.site).host
        const filePath = path.join(fileURLToPath(dir), "CNAME")

        await fs.writeFile(filePath, host)

        logger.info(`\`${OUTPUT_FILE}\` created at \`${path.relative(process.cwd(), dir.pathname)}\` with \`${host}\``)
      }
    }
  }
}
