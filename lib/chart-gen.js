const point = require('point-at-length')

function generateChart({ scopes }) {
  const hillPath = 'M0,185L7.48,184.6202370662127L14.96,184.17582460602216L22.439999999999998,183.65783333103593L29.92,183.0565023103311L37.4,182.36123532413689L44.879999999999995,181.5606128093965L52.36000000000001,180.64242197442712L59.84,179.59370763249137L67.32,178.4008461927037L74.8,177.0496450403555L82.28,175.52546922826318L89.75999999999999,173.81339697936795L97.24000000000001,171.89840496495393L104.72000000000001,169.7655836727164L112.2,167.40038241914803L119.68,164.7888827008677L127.16000000000001,161.91809763439824L134.64,158.77629422372397L142.12,155.353334145273L149.6,151.64102768133606L157.07999999999998,147.63349440032601L164.56,143.3275232142085L172.04000000000002,138.72292358077922L179.51999999999998,133.8228589030944L187,128.63415265149283L194.48000000000002,123.1675574340833L201.96,117.43797720380411L209.44000000000003,111.46463304252049L216.92,105.27116352544918L224.4,98.88565155321767L231.88,92.34057074384638L239.36,85.67264599068058L246.84,78.92262459009807L254.32000000000002,72.13495638741193L261.8,65.35738363148944L269.28,58.64044360797348L276.76,52.0368895680958L284.24,45.60103790825647L291.72,39.38805190369965L299.2,33.453174475143896L306.68,27.850924389299053L314.15999999999997,22.63427188711256L321.64,17.853810930022746L329.12,13.556945998627327L336.6,9.787111628371491L344.08000000000004,6.583042597891392L351.56,3.9781118902564288L359.03999999999996,1.999752237092622L366.52,0.6689752608675406L374,0L381.48,0L388.96000000000004,0.6689752608675406L396.44,1.999752237092622L403.92,3.978111890256457L411.40000000000003,6.583042597891392L418.88000000000005,9.787111628371491L426.35999999999996,13.556945998627327L433.84,17.853810930022746L441.32,22.634271887112533L448.8,27.850924389299053L456.28,33.453174475143896L463.76,39.38805190369965L471.24,45.60103790825647L478.72,52.0368895680958L486.2,58.64044360797348L493.68,65.35738363148944L501.16,72.13495638741199L508.64000000000004,78.9226245900981L516.12,85.67264599068062L523.6,92.34057074384634L531.0799999999999,98.88565155321764L538.56,105.27116352544913L546.04,111.46463304252049L553.52,117.43797720380411L561,123.1675574340833L568.48,128.63415265149283L575.96,133.8228589030944L583.44,138.72292358077922L590.9200000000001,143.3275232142085L598.4,147.63349440032601L605.88,151.64102768133608L613.36,155.35333414527304L620.8399999999999,158.77629422372394L628.3199999999999,161.91809763439824L635.8,164.7888827008677L643.28,167.40038241914803L650.76,169.7655836727164L658.24,171.89840496495393L665.72,173.81339697936795L673.2,175.52546922826318L680.6800000000001,177.0496450403555L688.1600000000001,178.4008461927037L695.64,179.59370763249137L703.12,180.64242197442712L710.6,181.5606128093965L718.0799999999999,182.36123532413689L725.56,183.0565023103311L733.04,183.65783333103593L740.52,184.17582460602216L748,184.6202370662127'


  const hillPts = point(hillPath)
  const hillLength = hillPts.length()

  return `
    <svg xmlns="http://www.w3.org/2000/svg" class="hill-chart__svg" width="770" height="240" viewBox="0 0 770 240">
      <style>
        .hill-chart__path {
          fill: none;
          opacity: 0.67;
          stroke: #6d6d6d;
          stroke-width: 1.5;
        }

        .hill-dot--orange .hill-dot__circle {
          fill: #ffa235;
        }

        .hill-dot--orange .hill-dot__line {
          stroke: #ffa235;
        }

        .hill-dot--blue .hill-dot__circle {
          fill: #1b6ac9;
        }

        .hill-dot--blue .hill-dot__line {
          stroke: #1b6ac9;
        }

        .hill-dot__circle--hidden {
          opacity: 0;
          stroke-width: 0;
        }

        .hill-dot__circle {
          stroke: #fff;
          stroke-width: 1;
        }

        .hill-chart__x-axis-label {
          font-size: 12px;
          text-anchor: middle;
          text-transform: uppercase;
          opacity: 0.5;
        }

        text {
          font-family: "Graphik", "Helvetica Neue", helvetica, "Apple Color Emoji", arial, sans-serif;
          fill: #283c46;
        }
      </style>
      <g transform="translate(10, 15)">
        <g class="hill-chart__x-axis" transform="translate(0, 195)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle">
            <path class="domain" stroke="#000" d="M0.5,0V0.5H748.5V0"></path>
        </g>
        <g class="hill-chart__y-axis" stroke-dasharray="2 2" transform="translate(374, 0)" fill="none" font-size="10" font-family="sans-serif" text-anchor="end">
            <path class="domain" stroke="#000" d="M0,185.5H0.5V0.5H0"></path>
        </g>
        <path class="hill-chart__path" d="${hillPath}" data-target="hill-chart.path"></path>
        <text class="hill-chart__x-axis-label" transform="translate(187, 215)" aria-hidden="true" role="presentation">Figuring things out</text>
        <text class="hill-chart__x-axis-label" transform="translate(561, 215)" aria-hidden="true" role="presentation">Making it happen</text>
      </g>
      <g class="hill-dots" transform="translate(10, 15)">
        ${
          scopes.map((scope, index) => {
            const [title, percentage] = scope.split('/')

            const [xPos, yPos] = hillPts.at((percentage/100) * hillLength)

            const color = (index % 2 == 1) ? 'blue' : 'orange'

            return `
              <g class="hill-dot hill-dot--${color}" role="group">
                <text class="hill-dot__label" aria-hidden="true" role="presentation" x="${xPos + 20}" y="${yPos + 5}" text-anchor="start">${title}</text>
                <line class="hill-dot__line" x1="${xPos}" x2="${xPos + 20}" y1="${yPos}" y2="${yPos}"></line>
                <circle class="hill-dot__circle hill-dot__circle--hidden" r="20" cx="134.64" cy="${yPos}"></circle>
                <circle class="hill-dot__circle hill-dot__circle--visible" r="10" cx="${xPos}" cy="${yPos}"></circle>
              </g>
            `
          })
        }
      </g>
    </svg>
  `
}

module.exports = generateChart
