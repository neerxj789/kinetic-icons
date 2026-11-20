/**
 * Kinetic Icons — React & Next.js Server Component Library
 * Zero client-only hooks or state. Compatible with React 17/18/19 and Next.js RSC.
 */

import { forwardRef, type ForwardRefExoticComponent, type RefAttributes, type SVGProps } from 'react';
import {
  DEFAULT_COLOR,
  DEFAULT_CORNER_RADIUS,
  DEFAULT_SIZE,
  DEFAULT_STROKE_WIDTH,
  toPascalCase,
  type IconDefinition,
  homeIcon,
  vaultIcon,
  accountsIcon,
  peopleIcon,
  reportsIcon,
  cloudIcon,
  starIcon,
  folderIcon,
  mapPinIcon,
  pinIcon,
  shoppingBagIcon,
  shoppingCartIcon,
  tagIcon,
  giftIcon,
  inboxIcon,
  micIcon,
  volumeIcon,
  volumeMuteIcon,
  wifiIcon,
  batteryIcon,
  bluetoothIcon,
  printerIcon,
  monitorIcon,
  smartphoneIcon,
  powerIcon,
  logInIcon,
  flameIcon,
  trophyIcon,
  bookIcon,
  helpCircleIcon,
  locationIcon,
  mapAddIcon,
  bulbIcon,
  smileyIcon,
  alarmIcon,
  stopwatchIcon,
  verifiedIcon,
  announcementIcon,
  headphonesIcon,
  videoIcon,
  walletIcon,
  rocketIcon,
  colorIcon,
  paletteIcon,
  themeIcon,
  carouselIcon,
  templatesIcon,
  roundCornerIcon,
  strokeIcon,
  fontIcon,
  numberIcon,
  musicIcon,
  aiSparkIcon,
  codeIcon,
  terminalIcon,
  commandIcon,
  cpuIcon,
  databaseIcon,
  gitBranchIcon,
  bracketsIcon,
  bugIcon,
  serverIcon,
  globeIcon,
  messageRoundIcon,
  messageRoundLinesIcon,
  messageRoundDotsIcon,
  commentIcon,
  commentRoundIcon,
  messageSquareIcon,
  messageLinesIcon,
  emailIcon,
  phoneIcon,
  heartIcon,
  thumbsUpIcon,
  shareIcon,
  shareRoundIcon,
  sendIcon,
  sendRoundIcon,
  bookmarkIcon,
  bookmarkRoundIcon,
  repostIcon,
  repostRoundIcon,
  bellIcon,
  eyeIcon,
  eyeOffIcon,
  userIcon,
  usersIcon,
  atSignIcon,
  hashIcon,
  playIcon,
  pauseIcon,
  cameraIcon,
  imageIcon,
  instagramIcon,
  facebookIcon,
  twitterIcon,
  xIcon,
  githubIcon,
  behanceIcon,
  substackIcon,
  linkedinIcon,
  youtubeIcon,
  googleIcon,
  appleIcon,
  androidIcon,
  windowsIcon,
  threadsIcon,
  tiktokIcon,
  spotifyIcon,
  dribbbleIcon,
  figmaIcon,
  discordIcon,
  whatsappIcon,
  telegramIcon,
  downloadIcon,
  uploadIcon,
  saveIcon,
  trashIcon,
  editIcon,
  copyIcon,
  plusIcon,
  minusIcon,
  closeIcon,
  checkIcon,
  doubleCheckIcon,
  filterIcon,
  refreshIcon,
  paperclipIcon,
  linkIcon,
  fileIcon,
  archiveIcon,
  undoIcon,
  redoIcon,
  sidebarLeftIcon,
  sidebarRightIcon,
  dashboardIcon,
  menuIcon,
  searchIcon,
  settingsIcon,
  slidersIcon,
  compassIcon,
  externalLinkIcon,
  moreHorizontalIcon,
  moreVerticalIcon,
  chevronLeftIcon,
  chevronRightIcon,
  chevronUpIcon,
  chevronDownIcon,
  arrowLeftIcon,
  arrowRightIcon,
  arrowUpIcon,
  arrowDownIcon,
  arrowUpRightIcon,
  creditCardIcon,
  chartLineIcon,
  pieChartIcon,
  layersIcon,
  boxIcon,
  calendarIcon,
  clockIcon,
  briefcaseIcon,
  receiptIcon,
  activityIcon,
  warningIcon,
  alertCircleIcon,
  infoIcon,
  checkCircleIcon,
  xCircleIcon,
  shieldIcon,
  shieldCheckIcon,
  shieldAlertIcon,
  lockIcon,
  unlockIcon,
  keyIcon,
  zapIcon,
  sunIcon,
  moonIcon,
  logOutIcon,
} from '../core';

export interface KineticIconProps
  extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  size?: number | string;
  strokeWidth?: number | string;
  radius?: number;
  color?: string;
}

export type KineticIconComponent = ForwardRefExoticComponent<
  KineticIconProps & RefAttributes<SVGSVGElement>
>;

export function createKineticIcon(icon: IconDefinition): KineticIconComponent {
  const Component = forwardRef<SVGSVGElement, KineticIconProps>(
    (
      {
        size = DEFAULT_SIZE,
        strokeWidth = DEFAULT_STROKE_WIDTH,
        radius = DEFAULT_CORNER_RADIUS,
        color = DEFAULT_COLOR,
        className,
        ...rest
      },
      ref
    ) => {
      const isRounded = radius > 0.1;
      const innerSvg = icon.draw(radius);
      return (
        <svg
          ref={ref}
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap={isRounded ? 'round' : 'square'}
          strokeLinejoin={isRounded ? 'round' : 'miter'}
          className={className}
          {...rest}
          dangerouslySetInnerHTML={{ __html: innerSvg }}
        />
      );
    }
  );
  Component.displayName = toPascalCase(icon.id);
  return Component;
}

export { DEFAULT_COLOR, DEFAULT_CORNER_RADIUS, DEFAULT_SIZE, DEFAULT_STROKE_WIDTH };
export type { IconDefinition };

export const Home = /*#__PURE__*/ createKineticIcon(homeIcon);
export const Vault = /*#__PURE__*/ createKineticIcon(vaultIcon);
export const Accounts = /*#__PURE__*/ createKineticIcon(accountsIcon);
export const People = /*#__PURE__*/ createKineticIcon(peopleIcon);
export const Reports = /*#__PURE__*/ createKineticIcon(reportsIcon);
export const Cloud = /*#__PURE__*/ createKineticIcon(cloudIcon);
export const Star = /*#__PURE__*/ createKineticIcon(starIcon);
export const Folder = /*#__PURE__*/ createKineticIcon(folderIcon);
export const MapPin = /*#__PURE__*/ createKineticIcon(mapPinIcon);
export const Pin = /*#__PURE__*/ createKineticIcon(pinIcon);
export const ShoppingBag = /*#__PURE__*/ createKineticIcon(shoppingBagIcon);
export const ShoppingCart = /*#__PURE__*/ createKineticIcon(shoppingCartIcon);
export const Tag = /*#__PURE__*/ createKineticIcon(tagIcon);
export const Gift = /*#__PURE__*/ createKineticIcon(giftIcon);
export const Inbox = /*#__PURE__*/ createKineticIcon(inboxIcon);
export const Mic = /*#__PURE__*/ createKineticIcon(micIcon);
export const Volume = /*#__PURE__*/ createKineticIcon(volumeIcon);
export const VolumeMute = /*#__PURE__*/ createKineticIcon(volumeMuteIcon);
export const Wifi = /*#__PURE__*/ createKineticIcon(wifiIcon);
export const Battery = /*#__PURE__*/ createKineticIcon(batteryIcon);
export const Bluetooth = /*#__PURE__*/ createKineticIcon(bluetoothIcon);
export const Printer = /*#__PURE__*/ createKineticIcon(printerIcon);
export const Monitor = /*#__PURE__*/ createKineticIcon(monitorIcon);
export const Smartphone = /*#__PURE__*/ createKineticIcon(smartphoneIcon);
export const Power = /*#__PURE__*/ createKineticIcon(powerIcon);
export const LogIn = /*#__PURE__*/ createKineticIcon(logInIcon);
export const Flame = /*#__PURE__*/ createKineticIcon(flameIcon);
export const Trophy = /*#__PURE__*/ createKineticIcon(trophyIcon);
export const Book = /*#__PURE__*/ createKineticIcon(bookIcon);
export const HelpCircle = /*#__PURE__*/ createKineticIcon(helpCircleIcon);
export const Location = /*#__PURE__*/ createKineticIcon(locationIcon);
export const MapAdd = /*#__PURE__*/ createKineticIcon(mapAddIcon);
export const Bulb = /*#__PURE__*/ createKineticIcon(bulbIcon);
export const Smiley = /*#__PURE__*/ createKineticIcon(smileyIcon);
export const Alarm = /*#__PURE__*/ createKineticIcon(alarmIcon);
export const Stopwatch = /*#__PURE__*/ createKineticIcon(stopwatchIcon);
export const Verified = /*#__PURE__*/ createKineticIcon(verifiedIcon);
export const Announcement = /*#__PURE__*/ createKineticIcon(announcementIcon);
export const Headphones = /*#__PURE__*/ createKineticIcon(headphonesIcon);
export const Video = /*#__PURE__*/ createKineticIcon(videoIcon);
export const Wallet = /*#__PURE__*/ createKineticIcon(walletIcon);
export const Rocket = /*#__PURE__*/ createKineticIcon(rocketIcon);
export const Color = /*#__PURE__*/ createKineticIcon(colorIcon);
export const Palette = /*#__PURE__*/ createKineticIcon(paletteIcon);
export const Theme = /*#__PURE__*/ createKineticIcon(themeIcon);
export const Carousel = /*#__PURE__*/ createKineticIcon(carouselIcon);
export const Templates = /*#__PURE__*/ createKineticIcon(templatesIcon);
export const RoundCorner = /*#__PURE__*/ createKineticIcon(roundCornerIcon);
export const Stroke = /*#__PURE__*/ createKineticIcon(strokeIcon);
export const Font = /*#__PURE__*/ createKineticIcon(fontIcon);
export const Number = /*#__PURE__*/ createKineticIcon(numberIcon);
export const Music = /*#__PURE__*/ createKineticIcon(musicIcon);
export const AiSpark = /*#__PURE__*/ createKineticIcon(aiSparkIcon);
export const Code = /*#__PURE__*/ createKineticIcon(codeIcon);
export const Terminal = /*#__PURE__*/ createKineticIcon(terminalIcon);
export const Command = /*#__PURE__*/ createKineticIcon(commandIcon);
export const Cpu = /*#__PURE__*/ createKineticIcon(cpuIcon);
export const Database = /*#__PURE__*/ createKineticIcon(databaseIcon);
export const GitBranch = /*#__PURE__*/ createKineticIcon(gitBranchIcon);
export const Brackets = /*#__PURE__*/ createKineticIcon(bracketsIcon);
export const Bug = /*#__PURE__*/ createKineticIcon(bugIcon);
export const Server = /*#__PURE__*/ createKineticIcon(serverIcon);
export const Globe = /*#__PURE__*/ createKineticIcon(globeIcon);
export const MessageRound = /*#__PURE__*/ createKineticIcon(messageRoundIcon);
export const MessageRoundLines = /*#__PURE__*/ createKineticIcon(messageRoundLinesIcon);
export const MessageRoundDots = /*#__PURE__*/ createKineticIcon(messageRoundDotsIcon);
export const Comment = /*#__PURE__*/ createKineticIcon(commentIcon);
export const CommentRound = /*#__PURE__*/ createKineticIcon(commentRoundIcon);
export const MessageSquare = /*#__PURE__*/ createKineticIcon(messageSquareIcon);
export const MessageLines = /*#__PURE__*/ createKineticIcon(messageLinesIcon);
export const Email = /*#__PURE__*/ createKineticIcon(emailIcon);
export const Phone = /*#__PURE__*/ createKineticIcon(phoneIcon);
export const Heart = /*#__PURE__*/ createKineticIcon(heartIcon);
export const ThumbsUp = /*#__PURE__*/ createKineticIcon(thumbsUpIcon);
export const Share = /*#__PURE__*/ createKineticIcon(shareIcon);
export const ShareRound = /*#__PURE__*/ createKineticIcon(shareRoundIcon);
export const Send = /*#__PURE__*/ createKineticIcon(sendIcon);
export const SendRound = /*#__PURE__*/ createKineticIcon(sendRoundIcon);
export const Bookmark = /*#__PURE__*/ createKineticIcon(bookmarkIcon);
export const BookmarkRound = /*#__PURE__*/ createKineticIcon(bookmarkRoundIcon);
export const Repost = /*#__PURE__*/ createKineticIcon(repostIcon);
export const RepostRound = /*#__PURE__*/ createKineticIcon(repostRoundIcon);
export const Bell = /*#__PURE__*/ createKineticIcon(bellIcon);
export const Eye = /*#__PURE__*/ createKineticIcon(eyeIcon);
export const EyeOff = /*#__PURE__*/ createKineticIcon(eyeOffIcon);
export const User = /*#__PURE__*/ createKineticIcon(userIcon);
export const Users = /*#__PURE__*/ createKineticIcon(usersIcon);
export const AtSign = /*#__PURE__*/ createKineticIcon(atSignIcon);
export const Hash = /*#__PURE__*/ createKineticIcon(hashIcon);
export const Play = /*#__PURE__*/ createKineticIcon(playIcon);
export const Pause = /*#__PURE__*/ createKineticIcon(pauseIcon);
export const Camera = /*#__PURE__*/ createKineticIcon(cameraIcon);
export const Image = /*#__PURE__*/ createKineticIcon(imageIcon);
export const Instagram = /*#__PURE__*/ createKineticIcon(instagramIcon);
export const Facebook = /*#__PURE__*/ createKineticIcon(facebookIcon);
export const Twitter = /*#__PURE__*/ createKineticIcon(twitterIcon);
export const X = /*#__PURE__*/ createKineticIcon(xIcon);
export const Github = /*#__PURE__*/ createKineticIcon(githubIcon);
export const Behance = /*#__PURE__*/ createKineticIcon(behanceIcon);
export const Substack = /*#__PURE__*/ createKineticIcon(substackIcon);
export const Linkedin = /*#__PURE__*/ createKineticIcon(linkedinIcon);
export const Youtube = /*#__PURE__*/ createKineticIcon(youtubeIcon);
export const Google = /*#__PURE__*/ createKineticIcon(googleIcon);
export const Apple = /*#__PURE__*/ createKineticIcon(appleIcon);
export const Android = /*#__PURE__*/ createKineticIcon(androidIcon);
export const Windows = /*#__PURE__*/ createKineticIcon(windowsIcon);
export const Threads = /*#__PURE__*/ createKineticIcon(threadsIcon);
export const Tiktok = /*#__PURE__*/ createKineticIcon(tiktokIcon);
export const Spotify = /*#__PURE__*/ createKineticIcon(spotifyIcon);
export const Dribbble = /*#__PURE__*/ createKineticIcon(dribbbleIcon);
export const Figma = /*#__PURE__*/ createKineticIcon(figmaIcon);
export const Discord = /*#__PURE__*/ createKineticIcon(discordIcon);
export const Whatsapp = /*#__PURE__*/ createKineticIcon(whatsappIcon);
export const Telegram = /*#__PURE__*/ createKineticIcon(telegramIcon);
export const Download = /*#__PURE__*/ createKineticIcon(downloadIcon);
export const Upload = /*#__PURE__*/ createKineticIcon(uploadIcon);
export const Save = /*#__PURE__*/ createKineticIcon(saveIcon);
export const Trash = /*#__PURE__*/ createKineticIcon(trashIcon);
export const Edit = /*#__PURE__*/ createKineticIcon(editIcon);
export const Copy = /*#__PURE__*/ createKineticIcon(copyIcon);
export const Plus = /*#__PURE__*/ createKineticIcon(plusIcon);
export const Minus = /*#__PURE__*/ createKineticIcon(minusIcon);
export const Close = /*#__PURE__*/ createKineticIcon(closeIcon);
export const Check = /*#__PURE__*/ createKineticIcon(checkIcon);
export const DoubleCheck = /*#__PURE__*/ createKineticIcon(doubleCheckIcon);
export const Filter = /*#__PURE__*/ createKineticIcon(filterIcon);
export const Refresh = /*#__PURE__*/ createKineticIcon(refreshIcon);
export const Paperclip = /*#__PURE__*/ createKineticIcon(paperclipIcon);
export const Link = /*#__PURE__*/ createKineticIcon(linkIcon);
export const File = /*#__PURE__*/ createKineticIcon(fileIcon);
export const Archive = /*#__PURE__*/ createKineticIcon(archiveIcon);
export const Undo = /*#__PURE__*/ createKineticIcon(undoIcon);
export const Redo = /*#__PURE__*/ createKineticIcon(redoIcon);
export const SidebarLeft = /*#__PURE__*/ createKineticIcon(sidebarLeftIcon);
export const SidebarRight = /*#__PURE__*/ createKineticIcon(sidebarRightIcon);
export const Dashboard = /*#__PURE__*/ createKineticIcon(dashboardIcon);
export const Menu = /*#__PURE__*/ createKineticIcon(menuIcon);
export const Search = /*#__PURE__*/ createKineticIcon(searchIcon);
export const Settings = /*#__PURE__*/ createKineticIcon(settingsIcon);
export const Sliders = /*#__PURE__*/ createKineticIcon(slidersIcon);
export const Compass = /*#__PURE__*/ createKineticIcon(compassIcon);
export const ExternalLink = /*#__PURE__*/ createKineticIcon(externalLinkIcon);
export const MoreHorizontal = /*#__PURE__*/ createKineticIcon(moreHorizontalIcon);
export const MoreVertical = /*#__PURE__*/ createKineticIcon(moreVerticalIcon);
export const ChevronLeft = /*#__PURE__*/ createKineticIcon(chevronLeftIcon);
export const ChevronRight = /*#__PURE__*/ createKineticIcon(chevronRightIcon);
export const ChevronUp = /*#__PURE__*/ createKineticIcon(chevronUpIcon);
export const ChevronDown = /*#__PURE__*/ createKineticIcon(chevronDownIcon);
export const ArrowLeft = /*#__PURE__*/ createKineticIcon(arrowLeftIcon);
export const ArrowRight = /*#__PURE__*/ createKineticIcon(arrowRightIcon);
export const ArrowUp = /*#__PURE__*/ createKineticIcon(arrowUpIcon);
export const ArrowDown = /*#__PURE__*/ createKineticIcon(arrowDownIcon);
export const ArrowUpRight = /*#__PURE__*/ createKineticIcon(arrowUpRightIcon);
export const CreditCard = /*#__PURE__*/ createKineticIcon(creditCardIcon);
export const ChartLine = /*#__PURE__*/ createKineticIcon(chartLineIcon);
export const PieChart = /*#__PURE__*/ createKineticIcon(pieChartIcon);
export const Layers = /*#__PURE__*/ createKineticIcon(layersIcon);
export const Box = /*#__PURE__*/ createKineticIcon(boxIcon);
export const Calendar = /*#__PURE__*/ createKineticIcon(calendarIcon);
export const Clock = /*#__PURE__*/ createKineticIcon(clockIcon);
export const Briefcase = /*#__PURE__*/ createKineticIcon(briefcaseIcon);
export const Receipt = /*#__PURE__*/ createKineticIcon(receiptIcon);
export const Activity = /*#__PURE__*/ createKineticIcon(activityIcon);
export const Warning = /*#__PURE__*/ createKineticIcon(warningIcon);
export const AlertCircle = /*#__PURE__*/ createKineticIcon(alertCircleIcon);
export const Info = /*#__PURE__*/ createKineticIcon(infoIcon);
export const CheckCircle = /*#__PURE__*/ createKineticIcon(checkCircleIcon);
export const XCircle = /*#__PURE__*/ createKineticIcon(xCircleIcon);
export const Shield = /*#__PURE__*/ createKineticIcon(shieldIcon);
export const ShieldCheck = /*#__PURE__*/ createKineticIcon(shieldCheckIcon);
export const ShieldAlert = /*#__PURE__*/ createKineticIcon(shieldAlertIcon);
export const Lock = /*#__PURE__*/ createKineticIcon(lockIcon);
export const Unlock = /*#__PURE__*/ createKineticIcon(unlockIcon);
export const Key = /*#__PURE__*/ createKineticIcon(keyIcon);
export const Zap = /*#__PURE__*/ createKineticIcon(zapIcon);
export const Sun = /*#__PURE__*/ createKineticIcon(sunIcon);
export const Moon = /*#__PURE__*/ createKineticIcon(moonIcon);
export const LogOut = /*#__PURE__*/ createKineticIcon(logOutIcon);
