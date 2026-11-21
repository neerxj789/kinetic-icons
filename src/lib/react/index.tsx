/**
 * Kinetic Icons — React & Next.js Server Component Library (462 Icons)
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
  homeKeyIcon,
  buildingIcon,
  buildingsIcon,
  factoryIcon,
  warehouseIcon,
  storeIcon,
  vaultIcon,
  inboxIcon,
  cloudIcon,
  accountsIcon,
  peopleIcon,
  contactCardIcon,
  smileyIcon,
  verifiedIcon,
  starIcon,
  trophyIcon,
  flameIcon,
  gemIcon,
  bulbIcon,
  announcementIcon,
  rocketIcon,
  lifebuoyIcon,
  reportsIcon,
  mapIcon,
  mapPinIcon,
  mapAddIcon,
  locationIcon,
  earthIcon,
  pinIcon,
  pinAngledIcon,
  pinOffIcon,
  shoppingBagIcon,
  shoppingCartIcon,
  shoppingCartPlusIcon,
  tagIcon,
  voucherIcon,
  badgePercentIcon,
  giftIcon,
  walletIcon,
  refundIcon,
  barcodeIcon,
  qrCodeIcon,
  truckIcon,
  micIcon,
  micOffIcon,
  volumeIcon,
  volumeOffIcon,
  headphonesIcon,
  videoIcon,
  videoOffIcon,
  wifiIcon,
  wifiOffIcon,
  bluetoothIcon,
  batteryIcon,
  powerIcon,
  smartphoneIcon,
  tabletIcon,
  laptopIcon,
  monitorIcon,
  printerIcon,
  keyboardIcon,
  mouseIcon,
  touchpadIcon,
  usbIcon,
  vibrateIcon,
  gamingIcon,
  bookIcon,
  bookOpenIcon,
  notebookIcon,
  translateIcon,
  calculatorIcon,
  scaleIcon,
  sizeChartIcon,
  puzzleIcon,
  hardHatIcon,
  alarmIcon,
  stopwatchIcon,
  utensilsIcon,
  chefHatIcon,
  pizzaIcon,
  burgerIcon,
  soupBowlIcon,
  cakeIcon,
  coffeeIcon,
  cupSodaIcon,
  deliveryBikeIcon,
  leafIcon,
  treePineIcon,
  treeDeciduousIcon,
  treePalmIcon,
  flowerIcon,
  flowerTulipIcon,
  flowerLotusIcon,
  dashboardIcon,
  menuIcon,
  sidebarLeftIcon,
  sidebarRightIcon,
  appsGridIcon,
  appsExploreIcon,
  gridPlusIcon,
  feedIcon,
  multitaskingIcon,
  stepsIcon,
  moreHorizontalIcon,
  moreHorizontalCircleIcon,
  moreVerticalIcon,
  searchIcon,
  browserSearchIcon,
  tabSearchIcon,
  compassIcon,
  externalLinkIcon,
  settingsIcon,
  slidersIcon,
  preferencesIcon,
  backwardIcon,
  forwardIcon,
  arrowLeftIcon,
  arrowLeftCircleIcon,
  arrowLeftSquareIcon,
  arrowRightIcon,
  arrowRightCircleIcon,
  arrowRightSquareIcon,
  arrowUpIcon,
  arrowUpCircleIcon,
  arrowUpSquareIcon,
  arrowDownIcon,
  arrowDownCircleIcon,
  arrowDownSquareIcon,
  arrowUpRightIcon,
  arrowUpRightCircleIcon,
  arrowUpRightSquareIcon,
  chevronLeftIcon,
  chevronLeftCircleIcon,
  chevronLeftSquareIcon,
  chevronRightIcon,
  chevronRightCircleIcon,
  chevronRightSquareIcon,
  chevronUpIcon,
  chevronUpCircleIcon,
  chevronUpSquareIcon,
  chevronDownIcon,
  chevronDownCircleIcon,
  chevronDownSquareIcon,
  cursorIcon,
  cursorHandIcon,
  cursorGrabIcon,
  cursorGrabbingIcon,
  cursorTextIcon,
  cursorMoveIcon,
  cursorCrosshairIcon,
  cursorPlusIcon,
  cursorBlockIcon,
  cursorWaitIcon,
  cursorResizeHorizontalIcon,
  cursorResizeVerticalIcon,
  plusIcon,
  plusCircleIcon,
  plusSquareIcon,
  minusIcon,
  minusCircleIcon,
  minusSquareIcon,
  multiplyIcon,
  multiplyCircleIcon,
  multiplySquareIcon,
  closeIcon,
  checkIcon,
  doubleCheckIcon,
  editIcon,
  composeIcon,
  writingIcon,
  eraserIcon,
  trashIcon,
  copyIcon,
  scissorsIcon,
  clipboardIcon,
  clipboardCheckIcon,
  selectAllIcon,
  undoIcon,
  redoIcon,
  refreshIcon,
  historyIcon,
  filterIcon,
  remixIcon,
  zoomInIcon,
  zoomOutIcon,
  scanIcon,
  wrenchIcon,
  troubleshootIcon,
  downloadIcon,
  uploadIcon,
  saveIcon,
  archiveIcon,
  paperclipIcon,
  linkIcon,
  unlinkIcon,
  fileIcon,
  fileTextIcon,
  filePlusIcon,
  fileMinusIcon,
  fileCheckIcon,
  fileSearchIcon,
  filesIcon,
  filesCheckIcon,
  folderIcon,
  folderPlusIcon,
  folderSearchIcon,
  folderUserIcon,
  stickyNoteIcon,
  tasksIcon,
  projectsIcon,
  artifactsIcon,
  libraryIcon,
  tableIcon,
  tableRowAddIcon,
  tableRowDeleteIcon,
  tableColumnAddIcon,
  tableColumnDeleteIcon,
  colorIcon,
  paletteIcon,
  swatchesIcon,
  themeIcon,
  contrastIcon,
  eyedropperIcon,
  shapesIcon,
  roundCornerIcon,
  strokeIcon,
  widgetIcon,
  templatesIcon,
  carouselIcon,
  collageIcon,
  canvasAddIcon,
  breakpointsIcon,
  scribbleIcon,
  scribblePadIcon,
  highlighterIcon,
  musicIcon,
  fontIcon,
  typographyIcon,
  numberIcon,
  headingIcon,
  heading1Icon,
  heading2Icon,
  heading3Icon,
  heading4Icon,
  paragraphIcon,
  boldIcon,
  italicIcon,
  underlineIcon,
  strikethroughIcon,
  quoteIcon,
  alignLeftIcon,
  alignCenterIcon,
  alignRightIcon,
  indentIcon,
  outdentIcon,
  listBulletIcon,
  listOrderedIcon,
  listChecksIcon,
  chatIcon,
  chatRoundIcon,
  chatPlusIcon,
  chatPlusRoundIcon,
  chatsIcon,
  statusIcon,
  broadcastIcon,
  pollIcon,
  disappearingMessageIcon,
  commentIcon,
  commentRoundIcon,
  messageRoundIcon,
  messageRoundLinesIcon,
  messageRoundDotsIcon,
  messageSquareIcon,
  messageLinesIcon,
  messageAlertIcon,
  messageHelpIcon,
  feedbackIcon,
  stickerIcon,
  stickerRoundIcon,
  stickerPlusIcon,
  stickerPlusRoundIcon,
  emailIcon,
  phoneIcon,
  atSignIcon,
  hashIcon,
  voiceSpeakIcon,
  heartIcon,
  heartOffIcon,
  thumbsUpIcon,
  bellIcon,
  bellOffIcon,
  eyeIcon,
  eyeOffIcon,
  shareIcon,
  shareRoundIcon,
  sendIcon,
  sendRoundIcon,
  bookmarkIcon,
  bookmarkRoundIcon,
  repostIcon,
  repostRoundIcon,
  subscriptionsIcon,
  userIcon,
  userCircleIcon,
  userPlusIcon,
  userSearchIcon,
  userBlockIcon,
  userSettingsIcon,
  userTagIcon,
  usersIcon,
  accountsSearchIcon,
  familyIcon,
  playIcon,
  playCircleIcon,
  pauseIcon,
  pauseCircleIcon,
  autoplayIcon,
  cameraIcon,
  imageIcon,
  imagesIcon,
  imagePlusIcon,
  storyAddIcon,
  videosIcon,
  reelsIcon,
  clapperboardIcon,
  captionsIcon,
  chartLineIcon,
  chartBarIcon,
  chartPieIcon,
  activityIcon,
  activityCircleIcon,
  activitySquareIcon,
  trendingUpIcon,
  trendingUpCircleIcon,
  trendingUpSquareIcon,
  trendingDownIcon,
  trendingDownCircleIcon,
  trendingDownSquareIcon,
  gaugeIcon,
  diagnosticIcon,
  listBoxIcon,
  layersIcon,
  presentationIcon,
  bankIcon,
  creditCardIcon,
  banknoteIcon,
  coinsIcon,
  piggyBankIcon,
  receiptIcon,
  dollarCircleIcon,
  rupeeCircleIcon,
  euroCircleIcon,
  percentIcon,
  percentCircleIcon,
  percentSquareIcon,
  exchangeIcon,
  exchangeCircleIcon,
  exchangeSquareIcon,
  calendarIcon,
  clockIcon,
  briefcaseIcon,
  jobSearchIcon,
  boxIcon,
  packageCheckIcon,
  packageReturnIcon,
  aiSparkIcon,
  sparkBoltIcon,
  userSparkIcon,
  avatarSparkIcon,
  botIcon,
  robotIcon,
  alienIcon,
  ghostIcon,
  crawlerIcon,
  waveformIcon,
  researchIcon,
  atomIcon,
  infinityIcon,
  codeIcon,
  terminalIcon,
  commandIcon,
  bracketsIcon,
  gitBranchIcon,
  branchesIcon,
  bugIcon,
  cpuIcon,
  databaseIcon,
  serverIcon,
  connectorsIcon,
  globeIcon,
  clockBoltIcon,
  infoIcon,
  helpCircleIcon,
  helpSquareIcon,
  warningIcon,
  alertCircleIcon,
  checkCircleIcon,
  xCircleIcon,
  banIcon,
  starCircleIcon,
  shieldIcon,
  shieldCheckIcon,
  shieldAlertIcon,
  shieldInfoIcon,
  shieldLockIcon,
  shieldStarIcon,
  familySafetyIcon,
  incognitoIcon,
  lockIcon,
  lockCircleIcon,
  lockSquareIcon,
  unlockIcon,
  keyIcon,
  keyCircleIcon,
  keySquareIcon,
  passkeysIcon,
  logInIcon,
  logOutIcon,
  zapIcon,
  zapCircleIcon,
  zapSquareIcon,
  sunIcon,
  moonIcon,
  openaiIcon,
  anthropicIcon,
  geminiIcon,
  githubIcon,
  vercelIcon,
  nextjsIcon,
  supabaseIcon,
  vscodeIcon,
  dockerIcon,
  figmaIcon,
  linearIcon,
  notionIcon,
  slackIcon,
  stripeIcon,
  googleIcon,
  googleDriveIcon,
  appleIcon,
  androidIcon,
  windowsIcon,
  instagramIcon,
  facebookIcon,
  threadsIcon,
  xIcon,
  twitterIcon,
  linkedinIcon,
  youtubeIcon,
  tiktokIcon,
  spotifyIcon,
  discordIcon,
  whatsappIcon,
  telegramIcon,
  dribbbleIcon,
  behanceIcon,
  substackIcon,
  wikipediaIcon,
  quoraIcon,
  redditIcon,
  internetArchiveIcon,
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
export const HomeKey = /*#__PURE__*/ createKineticIcon(homeKeyIcon);
export const Building = /*#__PURE__*/ createKineticIcon(buildingIcon);
export const Buildings = /*#__PURE__*/ createKineticIcon(buildingsIcon);
export const Factory = /*#__PURE__*/ createKineticIcon(factoryIcon);
export const Warehouse = /*#__PURE__*/ createKineticIcon(warehouseIcon);
export const Store = /*#__PURE__*/ createKineticIcon(storeIcon);
export const Vault = /*#__PURE__*/ createKineticIcon(vaultIcon);
export const Inbox = /*#__PURE__*/ createKineticIcon(inboxIcon);
export const Cloud = /*#__PURE__*/ createKineticIcon(cloudIcon);
export const Accounts = /*#__PURE__*/ createKineticIcon(accountsIcon);
export const People = /*#__PURE__*/ createKineticIcon(peopleIcon);
export const ContactCard = /*#__PURE__*/ createKineticIcon(contactCardIcon);
export const Smiley = /*#__PURE__*/ createKineticIcon(smileyIcon);
export const Verified = /*#__PURE__*/ createKineticIcon(verifiedIcon);
export const Star = /*#__PURE__*/ createKineticIcon(starIcon);
export const Trophy = /*#__PURE__*/ createKineticIcon(trophyIcon);
export const Flame = /*#__PURE__*/ createKineticIcon(flameIcon);
export const Gem = /*#__PURE__*/ createKineticIcon(gemIcon);
export const Bulb = /*#__PURE__*/ createKineticIcon(bulbIcon);
export const Announcement = /*#__PURE__*/ createKineticIcon(announcementIcon);
export const Rocket = /*#__PURE__*/ createKineticIcon(rocketIcon);
export const Lifebuoy = /*#__PURE__*/ createKineticIcon(lifebuoyIcon);
export const Reports = /*#__PURE__*/ createKineticIcon(reportsIcon);
export const Map = /*#__PURE__*/ createKineticIcon(mapIcon);
export const MapPin = /*#__PURE__*/ createKineticIcon(mapPinIcon);
export const MapAdd = /*#__PURE__*/ createKineticIcon(mapAddIcon);
export const Location = /*#__PURE__*/ createKineticIcon(locationIcon);
export const Earth = /*#__PURE__*/ createKineticIcon(earthIcon);
export const Pin = /*#__PURE__*/ createKineticIcon(pinIcon);
export const PinAngled = /*#__PURE__*/ createKineticIcon(pinAngledIcon);
export const PinOff = /*#__PURE__*/ createKineticIcon(pinOffIcon);
export const ShoppingBag = /*#__PURE__*/ createKineticIcon(shoppingBagIcon);
export const ShoppingCart = /*#__PURE__*/ createKineticIcon(shoppingCartIcon);
export const ShoppingCartPlus = /*#__PURE__*/ createKineticIcon(shoppingCartPlusIcon);
export const Tag = /*#__PURE__*/ createKineticIcon(tagIcon);
export const Voucher = /*#__PURE__*/ createKineticIcon(voucherIcon);
export const BadgePercent = /*#__PURE__*/ createKineticIcon(badgePercentIcon);
export const Gift = /*#__PURE__*/ createKineticIcon(giftIcon);
export const Wallet = /*#__PURE__*/ createKineticIcon(walletIcon);
export const Refund = /*#__PURE__*/ createKineticIcon(refundIcon);
export const Barcode = /*#__PURE__*/ createKineticIcon(barcodeIcon);
export const QrCode = /*#__PURE__*/ createKineticIcon(qrCodeIcon);
export const Truck = /*#__PURE__*/ createKineticIcon(truckIcon);
export const Mic = /*#__PURE__*/ createKineticIcon(micIcon);
export const MicOff = /*#__PURE__*/ createKineticIcon(micOffIcon);
export const Volume = /*#__PURE__*/ createKineticIcon(volumeIcon);
export const VolumeOff = /*#__PURE__*/ createKineticIcon(volumeOffIcon);
export const Headphones = /*#__PURE__*/ createKineticIcon(headphonesIcon);
export const Video = /*#__PURE__*/ createKineticIcon(videoIcon);
export const VideoOff = /*#__PURE__*/ createKineticIcon(videoOffIcon);
export const Wifi = /*#__PURE__*/ createKineticIcon(wifiIcon);
export const WifiOff = /*#__PURE__*/ createKineticIcon(wifiOffIcon);
export const Bluetooth = /*#__PURE__*/ createKineticIcon(bluetoothIcon);
export const Battery = /*#__PURE__*/ createKineticIcon(batteryIcon);
export const Power = /*#__PURE__*/ createKineticIcon(powerIcon);
export const Smartphone = /*#__PURE__*/ createKineticIcon(smartphoneIcon);
export const Tablet = /*#__PURE__*/ createKineticIcon(tabletIcon);
export const Laptop = /*#__PURE__*/ createKineticIcon(laptopIcon);
export const Monitor = /*#__PURE__*/ createKineticIcon(monitorIcon);
export const Printer = /*#__PURE__*/ createKineticIcon(printerIcon);
export const Keyboard = /*#__PURE__*/ createKineticIcon(keyboardIcon);
export const Mouse = /*#__PURE__*/ createKineticIcon(mouseIcon);
export const Touchpad = /*#__PURE__*/ createKineticIcon(touchpadIcon);
export const Usb = /*#__PURE__*/ createKineticIcon(usbIcon);
export const Vibrate = /*#__PURE__*/ createKineticIcon(vibrateIcon);
export const Gaming = /*#__PURE__*/ createKineticIcon(gamingIcon);
export const Book = /*#__PURE__*/ createKineticIcon(bookIcon);
export const BookOpen = /*#__PURE__*/ createKineticIcon(bookOpenIcon);
export const Notebook = /*#__PURE__*/ createKineticIcon(notebookIcon);
export const Translate = /*#__PURE__*/ createKineticIcon(translateIcon);
export const Calculator = /*#__PURE__*/ createKineticIcon(calculatorIcon);
export const Scale = /*#__PURE__*/ createKineticIcon(scaleIcon);
export const SizeChart = /*#__PURE__*/ createKineticIcon(sizeChartIcon);
export const Puzzle = /*#__PURE__*/ createKineticIcon(puzzleIcon);
export const HardHat = /*#__PURE__*/ createKineticIcon(hardHatIcon);
export const Alarm = /*#__PURE__*/ createKineticIcon(alarmIcon);
export const Stopwatch = /*#__PURE__*/ createKineticIcon(stopwatchIcon);
export const Utensils = /*#__PURE__*/ createKineticIcon(utensilsIcon);
export const ChefHat = /*#__PURE__*/ createKineticIcon(chefHatIcon);
export const Pizza = /*#__PURE__*/ createKineticIcon(pizzaIcon);
export const Burger = /*#__PURE__*/ createKineticIcon(burgerIcon);
export const SoupBowl = /*#__PURE__*/ createKineticIcon(soupBowlIcon);
export const Cake = /*#__PURE__*/ createKineticIcon(cakeIcon);
export const Coffee = /*#__PURE__*/ createKineticIcon(coffeeIcon);
export const CupSoda = /*#__PURE__*/ createKineticIcon(cupSodaIcon);
export const DeliveryBike = /*#__PURE__*/ createKineticIcon(deliveryBikeIcon);
export const Leaf = /*#__PURE__*/ createKineticIcon(leafIcon);
export const TreePine = /*#__PURE__*/ createKineticIcon(treePineIcon);
export const TreeDeciduous = /*#__PURE__*/ createKineticIcon(treeDeciduousIcon);
export const TreePalm = /*#__PURE__*/ createKineticIcon(treePalmIcon);
export const Flower = /*#__PURE__*/ createKineticIcon(flowerIcon);
export const FlowerTulip = /*#__PURE__*/ createKineticIcon(flowerTulipIcon);
export const FlowerLotus = /*#__PURE__*/ createKineticIcon(flowerLotusIcon);
export const Dashboard = /*#__PURE__*/ createKineticIcon(dashboardIcon);
export const Menu = /*#__PURE__*/ createKineticIcon(menuIcon);
export const SidebarLeft = /*#__PURE__*/ createKineticIcon(sidebarLeftIcon);
export const SidebarRight = /*#__PURE__*/ createKineticIcon(sidebarRightIcon);
export const AppsGrid = /*#__PURE__*/ createKineticIcon(appsGridIcon);
export const AppsExplore = /*#__PURE__*/ createKineticIcon(appsExploreIcon);
export const GridPlus = /*#__PURE__*/ createKineticIcon(gridPlusIcon);
export const Feed = /*#__PURE__*/ createKineticIcon(feedIcon);
export const Multitasking = /*#__PURE__*/ createKineticIcon(multitaskingIcon);
export const Steps = /*#__PURE__*/ createKineticIcon(stepsIcon);
export const MoreHorizontal = /*#__PURE__*/ createKineticIcon(moreHorizontalIcon);
export const MoreHorizontalCircle = /*#__PURE__*/ createKineticIcon(moreHorizontalCircleIcon);
export const MoreVertical = /*#__PURE__*/ createKineticIcon(moreVerticalIcon);
export const Search = /*#__PURE__*/ createKineticIcon(searchIcon);
export const BrowserSearch = /*#__PURE__*/ createKineticIcon(browserSearchIcon);
export const TabSearch = /*#__PURE__*/ createKineticIcon(tabSearchIcon);
export const Compass = /*#__PURE__*/ createKineticIcon(compassIcon);
export const ExternalLink = /*#__PURE__*/ createKineticIcon(externalLinkIcon);
export const Settings = /*#__PURE__*/ createKineticIcon(settingsIcon);
export const Sliders = /*#__PURE__*/ createKineticIcon(slidersIcon);
export const Preferences = /*#__PURE__*/ createKineticIcon(preferencesIcon);
export const Backward = /*#__PURE__*/ createKineticIcon(backwardIcon);
export const Forward = /*#__PURE__*/ createKineticIcon(forwardIcon);
export const ArrowLeft = /*#__PURE__*/ createKineticIcon(arrowLeftIcon);
export const ArrowLeftCircle = /*#__PURE__*/ createKineticIcon(arrowLeftCircleIcon);
export const ArrowLeftSquare = /*#__PURE__*/ createKineticIcon(arrowLeftSquareIcon);
export const ArrowRight = /*#__PURE__*/ createKineticIcon(arrowRightIcon);
export const ArrowRightCircle = /*#__PURE__*/ createKineticIcon(arrowRightCircleIcon);
export const ArrowRightSquare = /*#__PURE__*/ createKineticIcon(arrowRightSquareIcon);
export const ArrowUp = /*#__PURE__*/ createKineticIcon(arrowUpIcon);
export const ArrowUpCircle = /*#__PURE__*/ createKineticIcon(arrowUpCircleIcon);
export const ArrowUpSquare = /*#__PURE__*/ createKineticIcon(arrowUpSquareIcon);
export const ArrowDown = /*#__PURE__*/ createKineticIcon(arrowDownIcon);
export const ArrowDownCircle = /*#__PURE__*/ createKineticIcon(arrowDownCircleIcon);
export const ArrowDownSquare = /*#__PURE__*/ createKineticIcon(arrowDownSquareIcon);
export const ArrowUpRight = /*#__PURE__*/ createKineticIcon(arrowUpRightIcon);
export const ArrowUpRightCircle = /*#__PURE__*/ createKineticIcon(arrowUpRightCircleIcon);
export const ArrowUpRightSquare = /*#__PURE__*/ createKineticIcon(arrowUpRightSquareIcon);
export const ChevronLeft = /*#__PURE__*/ createKineticIcon(chevronLeftIcon);
export const ChevronLeftCircle = /*#__PURE__*/ createKineticIcon(chevronLeftCircleIcon);
export const ChevronLeftSquare = /*#__PURE__*/ createKineticIcon(chevronLeftSquareIcon);
export const ChevronRight = /*#__PURE__*/ createKineticIcon(chevronRightIcon);
export const ChevronRightCircle = /*#__PURE__*/ createKineticIcon(chevronRightCircleIcon);
export const ChevronRightSquare = /*#__PURE__*/ createKineticIcon(chevronRightSquareIcon);
export const ChevronUp = /*#__PURE__*/ createKineticIcon(chevronUpIcon);
export const ChevronUpCircle = /*#__PURE__*/ createKineticIcon(chevronUpCircleIcon);
export const ChevronUpSquare = /*#__PURE__*/ createKineticIcon(chevronUpSquareIcon);
export const ChevronDown = /*#__PURE__*/ createKineticIcon(chevronDownIcon);
export const ChevronDownCircle = /*#__PURE__*/ createKineticIcon(chevronDownCircleIcon);
export const ChevronDownSquare = /*#__PURE__*/ createKineticIcon(chevronDownSquareIcon);
export const Cursor = /*#__PURE__*/ createKineticIcon(cursorIcon);
export const CursorHand = /*#__PURE__*/ createKineticIcon(cursorHandIcon);
export const CursorGrab = /*#__PURE__*/ createKineticIcon(cursorGrabIcon);
export const CursorGrabbing = /*#__PURE__*/ createKineticIcon(cursorGrabbingIcon);
export const CursorText = /*#__PURE__*/ createKineticIcon(cursorTextIcon);
export const CursorMove = /*#__PURE__*/ createKineticIcon(cursorMoveIcon);
export const CursorCrosshair = /*#__PURE__*/ createKineticIcon(cursorCrosshairIcon);
export const CursorPlus = /*#__PURE__*/ createKineticIcon(cursorPlusIcon);
export const CursorBlock = /*#__PURE__*/ createKineticIcon(cursorBlockIcon);
export const CursorWait = /*#__PURE__*/ createKineticIcon(cursorWaitIcon);
export const CursorResizeHorizontal = /*#__PURE__*/ createKineticIcon(cursorResizeHorizontalIcon);
export const CursorResizeVertical = /*#__PURE__*/ createKineticIcon(cursorResizeVerticalIcon);
export const Plus = /*#__PURE__*/ createKineticIcon(plusIcon);
export const PlusCircle = /*#__PURE__*/ createKineticIcon(plusCircleIcon);
export const PlusSquare = /*#__PURE__*/ createKineticIcon(plusSquareIcon);
export const Minus = /*#__PURE__*/ createKineticIcon(minusIcon);
export const MinusCircle = /*#__PURE__*/ createKineticIcon(minusCircleIcon);
export const MinusSquare = /*#__PURE__*/ createKineticIcon(minusSquareIcon);
export const Multiply = /*#__PURE__*/ createKineticIcon(multiplyIcon);
export const MultiplyCircle = /*#__PURE__*/ createKineticIcon(multiplyCircleIcon);
export const MultiplySquare = /*#__PURE__*/ createKineticIcon(multiplySquareIcon);
export const Close = /*#__PURE__*/ createKineticIcon(closeIcon);
export const Check = /*#__PURE__*/ createKineticIcon(checkIcon);
export const DoubleCheck = /*#__PURE__*/ createKineticIcon(doubleCheckIcon);
export const Edit = /*#__PURE__*/ createKineticIcon(editIcon);
export const Compose = /*#__PURE__*/ createKineticIcon(composeIcon);
export const Writing = /*#__PURE__*/ createKineticIcon(writingIcon);
export const Eraser = /*#__PURE__*/ createKineticIcon(eraserIcon);
export const Trash = /*#__PURE__*/ createKineticIcon(trashIcon);
export const Copy = /*#__PURE__*/ createKineticIcon(copyIcon);
export const Scissors = /*#__PURE__*/ createKineticIcon(scissorsIcon);
export const Clipboard = /*#__PURE__*/ createKineticIcon(clipboardIcon);
export const ClipboardCheck = /*#__PURE__*/ createKineticIcon(clipboardCheckIcon);
export const SelectAll = /*#__PURE__*/ createKineticIcon(selectAllIcon);
export const Undo = /*#__PURE__*/ createKineticIcon(undoIcon);
export const Redo = /*#__PURE__*/ createKineticIcon(redoIcon);
export const Refresh = /*#__PURE__*/ createKineticIcon(refreshIcon);
export const History = /*#__PURE__*/ createKineticIcon(historyIcon);
export const Filter = /*#__PURE__*/ createKineticIcon(filterIcon);
export const Remix = /*#__PURE__*/ createKineticIcon(remixIcon);
export const ZoomIn = /*#__PURE__*/ createKineticIcon(zoomInIcon);
export const ZoomOut = /*#__PURE__*/ createKineticIcon(zoomOutIcon);
export const Scan = /*#__PURE__*/ createKineticIcon(scanIcon);
export const Wrench = /*#__PURE__*/ createKineticIcon(wrenchIcon);
export const Troubleshoot = /*#__PURE__*/ createKineticIcon(troubleshootIcon);
export const Download = /*#__PURE__*/ createKineticIcon(downloadIcon);
export const Upload = /*#__PURE__*/ createKineticIcon(uploadIcon);
export const Save = /*#__PURE__*/ createKineticIcon(saveIcon);
export const Archive = /*#__PURE__*/ createKineticIcon(archiveIcon);
export const Paperclip = /*#__PURE__*/ createKineticIcon(paperclipIcon);
export const Link = /*#__PURE__*/ createKineticIcon(linkIcon);
export const Unlink = /*#__PURE__*/ createKineticIcon(unlinkIcon);
export const File = /*#__PURE__*/ createKineticIcon(fileIcon);
export const FileText = /*#__PURE__*/ createKineticIcon(fileTextIcon);
export const FilePlus = /*#__PURE__*/ createKineticIcon(filePlusIcon);
export const FileMinus = /*#__PURE__*/ createKineticIcon(fileMinusIcon);
export const FileCheck = /*#__PURE__*/ createKineticIcon(fileCheckIcon);
export const FileSearch = /*#__PURE__*/ createKineticIcon(fileSearchIcon);
export const Files = /*#__PURE__*/ createKineticIcon(filesIcon);
export const FilesCheck = /*#__PURE__*/ createKineticIcon(filesCheckIcon);
export const Folder = /*#__PURE__*/ createKineticIcon(folderIcon);
export const FolderPlus = /*#__PURE__*/ createKineticIcon(folderPlusIcon);
export const FolderSearch = /*#__PURE__*/ createKineticIcon(folderSearchIcon);
export const FolderUser = /*#__PURE__*/ createKineticIcon(folderUserIcon);
export const StickyNote = /*#__PURE__*/ createKineticIcon(stickyNoteIcon);
export const Tasks = /*#__PURE__*/ createKineticIcon(tasksIcon);
export const Projects = /*#__PURE__*/ createKineticIcon(projectsIcon);
export const Artifacts = /*#__PURE__*/ createKineticIcon(artifactsIcon);
export const Library = /*#__PURE__*/ createKineticIcon(libraryIcon);
export const Table = /*#__PURE__*/ createKineticIcon(tableIcon);
export const TableRowAdd = /*#__PURE__*/ createKineticIcon(tableRowAddIcon);
export const TableRowDelete = /*#__PURE__*/ createKineticIcon(tableRowDeleteIcon);
export const TableColumnAdd = /*#__PURE__*/ createKineticIcon(tableColumnAddIcon);
export const TableColumnDelete = /*#__PURE__*/ createKineticIcon(tableColumnDeleteIcon);
export const Color = /*#__PURE__*/ createKineticIcon(colorIcon);
export const Palette = /*#__PURE__*/ createKineticIcon(paletteIcon);
export const Swatches = /*#__PURE__*/ createKineticIcon(swatchesIcon);
export const Theme = /*#__PURE__*/ createKineticIcon(themeIcon);
export const Contrast = /*#__PURE__*/ createKineticIcon(contrastIcon);
export const Eyedropper = /*#__PURE__*/ createKineticIcon(eyedropperIcon);
export const Shapes = /*#__PURE__*/ createKineticIcon(shapesIcon);
export const RoundCorner = /*#__PURE__*/ createKineticIcon(roundCornerIcon);
export const Stroke = /*#__PURE__*/ createKineticIcon(strokeIcon);
export const Widget = /*#__PURE__*/ createKineticIcon(widgetIcon);
export const Templates = /*#__PURE__*/ createKineticIcon(templatesIcon);
export const Carousel = /*#__PURE__*/ createKineticIcon(carouselIcon);
export const Collage = /*#__PURE__*/ createKineticIcon(collageIcon);
export const CanvasAdd = /*#__PURE__*/ createKineticIcon(canvasAddIcon);
export const Breakpoints = /*#__PURE__*/ createKineticIcon(breakpointsIcon);
export const Scribble = /*#__PURE__*/ createKineticIcon(scribbleIcon);
export const ScribblePad = /*#__PURE__*/ createKineticIcon(scribblePadIcon);
export const Highlighter = /*#__PURE__*/ createKineticIcon(highlighterIcon);
export const Music = /*#__PURE__*/ createKineticIcon(musicIcon);
export const Font = /*#__PURE__*/ createKineticIcon(fontIcon);
export const Typography = /*#__PURE__*/ createKineticIcon(typographyIcon);
export const Number = /*#__PURE__*/ createKineticIcon(numberIcon);
export const Heading = /*#__PURE__*/ createKineticIcon(headingIcon);
export const Heading1 = /*#__PURE__*/ createKineticIcon(heading1Icon);
export const Heading2 = /*#__PURE__*/ createKineticIcon(heading2Icon);
export const Heading3 = /*#__PURE__*/ createKineticIcon(heading3Icon);
export const Heading4 = /*#__PURE__*/ createKineticIcon(heading4Icon);
export const Paragraph = /*#__PURE__*/ createKineticIcon(paragraphIcon);
export const Bold = /*#__PURE__*/ createKineticIcon(boldIcon);
export const Italic = /*#__PURE__*/ createKineticIcon(italicIcon);
export const Underline = /*#__PURE__*/ createKineticIcon(underlineIcon);
export const Strikethrough = /*#__PURE__*/ createKineticIcon(strikethroughIcon);
export const Quote = /*#__PURE__*/ createKineticIcon(quoteIcon);
export const AlignLeft = /*#__PURE__*/ createKineticIcon(alignLeftIcon);
export const AlignCenter = /*#__PURE__*/ createKineticIcon(alignCenterIcon);
export const AlignRight = /*#__PURE__*/ createKineticIcon(alignRightIcon);
export const Indent = /*#__PURE__*/ createKineticIcon(indentIcon);
export const Outdent = /*#__PURE__*/ createKineticIcon(outdentIcon);
export const ListBullet = /*#__PURE__*/ createKineticIcon(listBulletIcon);
export const ListOrdered = /*#__PURE__*/ createKineticIcon(listOrderedIcon);
export const ListChecks = /*#__PURE__*/ createKineticIcon(listChecksIcon);
export const Chat = /*#__PURE__*/ createKineticIcon(chatIcon);
export const ChatRound = /*#__PURE__*/ createKineticIcon(chatRoundIcon);
export const ChatPlus = /*#__PURE__*/ createKineticIcon(chatPlusIcon);
export const ChatPlusRound = /*#__PURE__*/ createKineticIcon(chatPlusRoundIcon);
export const Chats = /*#__PURE__*/ createKineticIcon(chatsIcon);
export const Status = /*#__PURE__*/ createKineticIcon(statusIcon);
export const Broadcast = /*#__PURE__*/ createKineticIcon(broadcastIcon);
export const Poll = /*#__PURE__*/ createKineticIcon(pollIcon);
export const DisappearingMessage = /*#__PURE__*/ createKineticIcon(disappearingMessageIcon);
export const Comment = /*#__PURE__*/ createKineticIcon(commentIcon);
export const CommentRound = /*#__PURE__*/ createKineticIcon(commentRoundIcon);
export const MessageRound = /*#__PURE__*/ createKineticIcon(messageRoundIcon);
export const MessageRoundLines = /*#__PURE__*/ createKineticIcon(messageRoundLinesIcon);
export const MessageRoundDots = /*#__PURE__*/ createKineticIcon(messageRoundDotsIcon);
export const MessageSquare = /*#__PURE__*/ createKineticIcon(messageSquareIcon);
export const MessageLines = /*#__PURE__*/ createKineticIcon(messageLinesIcon);
export const MessageAlert = /*#__PURE__*/ createKineticIcon(messageAlertIcon);
export const MessageHelp = /*#__PURE__*/ createKineticIcon(messageHelpIcon);
export const Feedback = /*#__PURE__*/ createKineticIcon(feedbackIcon);
export const Sticker = /*#__PURE__*/ createKineticIcon(stickerIcon);
export const StickerRound = /*#__PURE__*/ createKineticIcon(stickerRoundIcon);
export const StickerPlus = /*#__PURE__*/ createKineticIcon(stickerPlusIcon);
export const StickerPlusRound = /*#__PURE__*/ createKineticIcon(stickerPlusRoundIcon);
export const Email = /*#__PURE__*/ createKineticIcon(emailIcon);
export const Phone = /*#__PURE__*/ createKineticIcon(phoneIcon);
export const AtSign = /*#__PURE__*/ createKineticIcon(atSignIcon);
export const Hash = /*#__PURE__*/ createKineticIcon(hashIcon);
export const VoiceSpeak = /*#__PURE__*/ createKineticIcon(voiceSpeakIcon);
export const Heart = /*#__PURE__*/ createKineticIcon(heartIcon);
export const HeartOff = /*#__PURE__*/ createKineticIcon(heartOffIcon);
export const ThumbsUp = /*#__PURE__*/ createKineticIcon(thumbsUpIcon);
export const Bell = /*#__PURE__*/ createKineticIcon(bellIcon);
export const BellOff = /*#__PURE__*/ createKineticIcon(bellOffIcon);
export const Eye = /*#__PURE__*/ createKineticIcon(eyeIcon);
export const EyeOff = /*#__PURE__*/ createKineticIcon(eyeOffIcon);
export const Share = /*#__PURE__*/ createKineticIcon(shareIcon);
export const ShareRound = /*#__PURE__*/ createKineticIcon(shareRoundIcon);
export const Send = /*#__PURE__*/ createKineticIcon(sendIcon);
export const SendRound = /*#__PURE__*/ createKineticIcon(sendRoundIcon);
export const Bookmark = /*#__PURE__*/ createKineticIcon(bookmarkIcon);
export const BookmarkRound = /*#__PURE__*/ createKineticIcon(bookmarkRoundIcon);
export const Repost = /*#__PURE__*/ createKineticIcon(repostIcon);
export const RepostRound = /*#__PURE__*/ createKineticIcon(repostRoundIcon);
export const Subscriptions = /*#__PURE__*/ createKineticIcon(subscriptionsIcon);
export const User = /*#__PURE__*/ createKineticIcon(userIcon);
export const UserCircle = /*#__PURE__*/ createKineticIcon(userCircleIcon);
export const UserPlus = /*#__PURE__*/ createKineticIcon(userPlusIcon);
export const UserSearch = /*#__PURE__*/ createKineticIcon(userSearchIcon);
export const UserBlock = /*#__PURE__*/ createKineticIcon(userBlockIcon);
export const UserSettings = /*#__PURE__*/ createKineticIcon(userSettingsIcon);
export const UserTag = /*#__PURE__*/ createKineticIcon(userTagIcon);
export const Users = /*#__PURE__*/ createKineticIcon(usersIcon);
export const AccountsSearch = /*#__PURE__*/ createKineticIcon(accountsSearchIcon);
export const Family = /*#__PURE__*/ createKineticIcon(familyIcon);
export const Play = /*#__PURE__*/ createKineticIcon(playIcon);
export const PlayCircle = /*#__PURE__*/ createKineticIcon(playCircleIcon);
export const Pause = /*#__PURE__*/ createKineticIcon(pauseIcon);
export const PauseCircle = /*#__PURE__*/ createKineticIcon(pauseCircleIcon);
export const Autoplay = /*#__PURE__*/ createKineticIcon(autoplayIcon);
export const Camera = /*#__PURE__*/ createKineticIcon(cameraIcon);
export const Image = /*#__PURE__*/ createKineticIcon(imageIcon);
export const Images = /*#__PURE__*/ createKineticIcon(imagesIcon);
export const ImagePlus = /*#__PURE__*/ createKineticIcon(imagePlusIcon);
export const StoryAdd = /*#__PURE__*/ createKineticIcon(storyAddIcon);
export const Videos = /*#__PURE__*/ createKineticIcon(videosIcon);
export const Reels = /*#__PURE__*/ createKineticIcon(reelsIcon);
export const Clapperboard = /*#__PURE__*/ createKineticIcon(clapperboardIcon);
export const Captions = /*#__PURE__*/ createKineticIcon(captionsIcon);
export const ChartLine = /*#__PURE__*/ createKineticIcon(chartLineIcon);
export const ChartBar = /*#__PURE__*/ createKineticIcon(chartBarIcon);
export const ChartPie = /*#__PURE__*/ createKineticIcon(chartPieIcon);
export const Activity = /*#__PURE__*/ createKineticIcon(activityIcon);
export const ActivityCircle = /*#__PURE__*/ createKineticIcon(activityCircleIcon);
export const ActivitySquare = /*#__PURE__*/ createKineticIcon(activitySquareIcon);
export const TrendingUp = /*#__PURE__*/ createKineticIcon(trendingUpIcon);
export const TrendingUpCircle = /*#__PURE__*/ createKineticIcon(trendingUpCircleIcon);
export const TrendingUpSquare = /*#__PURE__*/ createKineticIcon(trendingUpSquareIcon);
export const TrendingDown = /*#__PURE__*/ createKineticIcon(trendingDownIcon);
export const TrendingDownCircle = /*#__PURE__*/ createKineticIcon(trendingDownCircleIcon);
export const TrendingDownSquare = /*#__PURE__*/ createKineticIcon(trendingDownSquareIcon);
export const Gauge = /*#__PURE__*/ createKineticIcon(gaugeIcon);
export const Diagnostic = /*#__PURE__*/ createKineticIcon(diagnosticIcon);
export const ListBox = /*#__PURE__*/ createKineticIcon(listBoxIcon);
export const Layers = /*#__PURE__*/ createKineticIcon(layersIcon);
export const Presentation = /*#__PURE__*/ createKineticIcon(presentationIcon);
export const Bank = /*#__PURE__*/ createKineticIcon(bankIcon);
export const CreditCard = /*#__PURE__*/ createKineticIcon(creditCardIcon);
export const Banknote = /*#__PURE__*/ createKineticIcon(banknoteIcon);
export const Coins = /*#__PURE__*/ createKineticIcon(coinsIcon);
export const PiggyBank = /*#__PURE__*/ createKineticIcon(piggyBankIcon);
export const Receipt = /*#__PURE__*/ createKineticIcon(receiptIcon);
export const DollarCircle = /*#__PURE__*/ createKineticIcon(dollarCircleIcon);
export const RupeeCircle = /*#__PURE__*/ createKineticIcon(rupeeCircleIcon);
export const EuroCircle = /*#__PURE__*/ createKineticIcon(euroCircleIcon);
export const Percent = /*#__PURE__*/ createKineticIcon(percentIcon);
export const PercentCircle = /*#__PURE__*/ createKineticIcon(percentCircleIcon);
export const PercentSquare = /*#__PURE__*/ createKineticIcon(percentSquareIcon);
export const Exchange = /*#__PURE__*/ createKineticIcon(exchangeIcon);
export const ExchangeCircle = /*#__PURE__*/ createKineticIcon(exchangeCircleIcon);
export const ExchangeSquare = /*#__PURE__*/ createKineticIcon(exchangeSquareIcon);
export const Calendar = /*#__PURE__*/ createKineticIcon(calendarIcon);
export const Clock = /*#__PURE__*/ createKineticIcon(clockIcon);
export const Briefcase = /*#__PURE__*/ createKineticIcon(briefcaseIcon);
export const JobSearch = /*#__PURE__*/ createKineticIcon(jobSearchIcon);
export const Box = /*#__PURE__*/ createKineticIcon(boxIcon);
export const PackageCheck = /*#__PURE__*/ createKineticIcon(packageCheckIcon);
export const PackageReturn = /*#__PURE__*/ createKineticIcon(packageReturnIcon);
export const AiSpark = /*#__PURE__*/ createKineticIcon(aiSparkIcon);
export const SparkBolt = /*#__PURE__*/ createKineticIcon(sparkBoltIcon);
export const UserSpark = /*#__PURE__*/ createKineticIcon(userSparkIcon);
export const AvatarSpark = /*#__PURE__*/ createKineticIcon(avatarSparkIcon);
export const Bot = /*#__PURE__*/ createKineticIcon(botIcon);
export const Robot = /*#__PURE__*/ createKineticIcon(robotIcon);
export const Alien = /*#__PURE__*/ createKineticIcon(alienIcon);
export const Ghost = /*#__PURE__*/ createKineticIcon(ghostIcon);
export const Crawler = /*#__PURE__*/ createKineticIcon(crawlerIcon);
export const Waveform = /*#__PURE__*/ createKineticIcon(waveformIcon);
export const Research = /*#__PURE__*/ createKineticIcon(researchIcon);
export const Atom = /*#__PURE__*/ createKineticIcon(atomIcon);
export const Infinity = /*#__PURE__*/ createKineticIcon(infinityIcon);
export const Code = /*#__PURE__*/ createKineticIcon(codeIcon);
export const Terminal = /*#__PURE__*/ createKineticIcon(terminalIcon);
export const Command = /*#__PURE__*/ createKineticIcon(commandIcon);
export const Brackets = /*#__PURE__*/ createKineticIcon(bracketsIcon);
export const GitBranch = /*#__PURE__*/ createKineticIcon(gitBranchIcon);
export const Branches = /*#__PURE__*/ createKineticIcon(branchesIcon);
export const Bug = /*#__PURE__*/ createKineticIcon(bugIcon);
export const Cpu = /*#__PURE__*/ createKineticIcon(cpuIcon);
export const Database = /*#__PURE__*/ createKineticIcon(databaseIcon);
export const Server = /*#__PURE__*/ createKineticIcon(serverIcon);
export const Connectors = /*#__PURE__*/ createKineticIcon(connectorsIcon);
export const Globe = /*#__PURE__*/ createKineticIcon(globeIcon);
export const ClockBolt = /*#__PURE__*/ createKineticIcon(clockBoltIcon);
export const Info = /*#__PURE__*/ createKineticIcon(infoIcon);
export const HelpCircle = /*#__PURE__*/ createKineticIcon(helpCircleIcon);
export const HelpSquare = /*#__PURE__*/ createKineticIcon(helpSquareIcon);
export const Warning = /*#__PURE__*/ createKineticIcon(warningIcon);
export const AlertCircle = /*#__PURE__*/ createKineticIcon(alertCircleIcon);
export const CheckCircle = /*#__PURE__*/ createKineticIcon(checkCircleIcon);
export const XCircle = /*#__PURE__*/ createKineticIcon(xCircleIcon);
export const Ban = /*#__PURE__*/ createKineticIcon(banIcon);
export const StarCircle = /*#__PURE__*/ createKineticIcon(starCircleIcon);
export const Shield = /*#__PURE__*/ createKineticIcon(shieldIcon);
export const ShieldCheck = /*#__PURE__*/ createKineticIcon(shieldCheckIcon);
export const ShieldAlert = /*#__PURE__*/ createKineticIcon(shieldAlertIcon);
export const ShieldInfo = /*#__PURE__*/ createKineticIcon(shieldInfoIcon);
export const ShieldLock = /*#__PURE__*/ createKineticIcon(shieldLockIcon);
export const ShieldStar = /*#__PURE__*/ createKineticIcon(shieldStarIcon);
export const FamilySafety = /*#__PURE__*/ createKineticIcon(familySafetyIcon);
export const Incognito = /*#__PURE__*/ createKineticIcon(incognitoIcon);
export const Lock = /*#__PURE__*/ createKineticIcon(lockIcon);
export const LockCircle = /*#__PURE__*/ createKineticIcon(lockCircleIcon);
export const LockSquare = /*#__PURE__*/ createKineticIcon(lockSquareIcon);
export const Unlock = /*#__PURE__*/ createKineticIcon(unlockIcon);
export const Key = /*#__PURE__*/ createKineticIcon(keyIcon);
export const KeyCircle = /*#__PURE__*/ createKineticIcon(keyCircleIcon);
export const KeySquare = /*#__PURE__*/ createKineticIcon(keySquareIcon);
export const Passkeys = /*#__PURE__*/ createKineticIcon(passkeysIcon);
export const LogIn = /*#__PURE__*/ createKineticIcon(logInIcon);
export const LogOut = /*#__PURE__*/ createKineticIcon(logOutIcon);
export const Zap = /*#__PURE__*/ createKineticIcon(zapIcon);
export const ZapCircle = /*#__PURE__*/ createKineticIcon(zapCircleIcon);
export const ZapSquare = /*#__PURE__*/ createKineticIcon(zapSquareIcon);
export const Sun = /*#__PURE__*/ createKineticIcon(sunIcon);
export const Moon = /*#__PURE__*/ createKineticIcon(moonIcon);
export const Openai = /*#__PURE__*/ createKineticIcon(openaiIcon);
export const Anthropic = /*#__PURE__*/ createKineticIcon(anthropicIcon);
export const Gemini = /*#__PURE__*/ createKineticIcon(geminiIcon);
export const Github = /*#__PURE__*/ createKineticIcon(githubIcon);
export const Vercel = /*#__PURE__*/ createKineticIcon(vercelIcon);
export const Nextjs = /*#__PURE__*/ createKineticIcon(nextjsIcon);
export const Supabase = /*#__PURE__*/ createKineticIcon(supabaseIcon);
export const Vscode = /*#__PURE__*/ createKineticIcon(vscodeIcon);
export const Docker = /*#__PURE__*/ createKineticIcon(dockerIcon);
export const Figma = /*#__PURE__*/ createKineticIcon(figmaIcon);
export const Linear = /*#__PURE__*/ createKineticIcon(linearIcon);
export const Notion = /*#__PURE__*/ createKineticIcon(notionIcon);
export const Slack = /*#__PURE__*/ createKineticIcon(slackIcon);
export const Stripe = /*#__PURE__*/ createKineticIcon(stripeIcon);
export const Google = /*#__PURE__*/ createKineticIcon(googleIcon);
export const GoogleDrive = /*#__PURE__*/ createKineticIcon(googleDriveIcon);
export const Apple = /*#__PURE__*/ createKineticIcon(appleIcon);
export const Android = /*#__PURE__*/ createKineticIcon(androidIcon);
export const Windows = /*#__PURE__*/ createKineticIcon(windowsIcon);
export const Instagram = /*#__PURE__*/ createKineticIcon(instagramIcon);
export const Facebook = /*#__PURE__*/ createKineticIcon(facebookIcon);
export const Threads = /*#__PURE__*/ createKineticIcon(threadsIcon);
export const X = /*#__PURE__*/ createKineticIcon(xIcon);
export const Twitter = /*#__PURE__*/ createKineticIcon(twitterIcon);
export const Linkedin = /*#__PURE__*/ createKineticIcon(linkedinIcon);
export const Youtube = /*#__PURE__*/ createKineticIcon(youtubeIcon);
export const Tiktok = /*#__PURE__*/ createKineticIcon(tiktokIcon);
export const Spotify = /*#__PURE__*/ createKineticIcon(spotifyIcon);
export const Discord = /*#__PURE__*/ createKineticIcon(discordIcon);
export const Whatsapp = /*#__PURE__*/ createKineticIcon(whatsappIcon);
export const Telegram = /*#__PURE__*/ createKineticIcon(telegramIcon);
export const Dribbble = /*#__PURE__*/ createKineticIcon(dribbbleIcon);
export const Behance = /*#__PURE__*/ createKineticIcon(behanceIcon);
export const Substack = /*#__PURE__*/ createKineticIcon(substackIcon);
export const Wikipedia = /*#__PURE__*/ createKineticIcon(wikipediaIcon);
export const Quora = /*#__PURE__*/ createKineticIcon(quoraIcon);
export const Reddit = /*#__PURE__*/ createKineticIcon(redditIcon);
export const InternetArchive = /*#__PURE__*/ createKineticIcon(internetArchiveIcon);
