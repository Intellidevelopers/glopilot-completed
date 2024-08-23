import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import HomePage from './src/screens/HomePage';
import CalendarScreen from './src/screens/Calendar';
import StatisticScreen from './src/screens/Statistic';
import MessageScreen from './src/screens/MessageList';
import AccountScreen from './src/screens/Account';
import PropertyScreen from './src/screens/PropertyScreen';
import LocationScreen from './src/screens/LocationScreen';
import MapScreen from './src/screens/MapScreen';
import AmenityScreen from './src/screens/AmenityScreen';
import AddPhotoScreen from './src/screens/AddPhotoScreen';
import AddListingScreen from './src/screens/AddListingScreen';
import AboutScreen from './src/screens/AboutScreen';
import PlaceNameScreen from './src/screens/PlaceNameScreen';
import CreateProfileScreen from './src/screens/CreateProfileScreen';
import PhoneNumberScreen from './src/screens/PhoneNumberScreen';
import VerificationScreen from './src/screens/VerificationScreen';
import PhoneScreen from './src/screens/PhoneScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import HostPreferenceScreen from './src/screens/HostScreen';
import NoticePeriodScreen from './src/screens/NoticePeriod';
import NoticeBoardScreen from './src/screens/NoticeBoard';
import PublishScreen from './src/screens/PublishScreen';
import NotificationScreen from './src/screens/Notification';
import TransactionHistoryScreen from './src/screens/TransactionHistory';
import ConversationScreen from './src/screens/Conversation';
import AllListingsScreen from './src/screens/AllListings';
import ListingDetailsScreen from './src/screens/ListingDetails';
import ListingTitleScreen from './src/screens/ListingTitle';
import AmenitiesSettingScreen from './src/screens/AmenitiesSetting';
import ListingLocationScreen from './src/screens/ListingLocation';
import GuestBookingScreen from './src/screens/GuestBooking';
import ListingRules from './src/screens/GuestRequirement';
import Listing from './src/screens/Listing';
import CancellationPolicyScreen from './src/screens/CancellationPolicy';
import AvailabilitySettings from './src/screens/AvailabilitySettings';
import TripLength from './src/screens/TripLenght';
import CheckInCheckOut from './src/screens/CheckInCheckOut';
import Regulations from './src/screens/Regulations';
import StatusScreen from './src/screens/Status';
import MyProfile from './src/screens/MyProfile';
import ProfileEdit from './src/screens/ProfileEdit';
import Wallet from './src/screens/Wallet';
import NotificationSettings from './src/screens/NotificationSettings';
import PrivacyScreen from './src/screens/Privacy';
import SecurityScreen from './src/screens/Security';
import HelpCenterScreen from './src/screens/HelpCenter';
import HelpScreen from './src/screens/Help';
import DeleteAccountScreen from './src/screens/DeleteAccount';
import ConsentScreen from './src/screens/Consent';
import WarningScreen from './src/screens/Warning';
import ConfirmationScreen from './src/screens/Confirmation';
import VerificationCodeScreen from './src/screens/VerificationCode';
import SuccessScreen from './src/screens/Success';
import AccountTypeScreen from './src/screens/AccountTypeScreen';
import CarOwnerVerification from './src/screens/CarOwnerVerification';
import ProofInsuranceScreen from './src/screens/ProofInsuranceScreen';
import ProofConfirmationScreen from './src/screens/ProofConfirmation';
import ProofSuccessScreen from './src/screens/ProofSuccess';
import CarsScreen from './src/screens/Cars';
import AddCarScreen from './src/screens/AddCar';
import AllBookingScreen from './src/screens/AllBooking';
import EarningsScreen from './src/screens/Earnings';
import AccountProfile from './src/screens/AccountProfile';
import ViewsBookingScreen from './src/screens/ViewsBooking';
import HomePageScreen from './src/screens/HomePageScreen';
import UsersListScreen from './src/screens/UsersList';
import ListingPhotoScreen from './src/screens/ListingPhotoScreen';
import PropertyGuestScreen from './src/screens/PropertyGuestScreen';
import ListingDescriptionScreen from './src/screens/ListingDescriptionScreen';
import AccessibilityScreen from './src/screens/AccessibilityScreen';
import CurrencyScreen from './src/screens/CurrencyScreen';
import AdditionalChargesScreen from './src/screens/AdditionalChargesScreen';
import CheckInInstructionsScreen from './src/screens/CheckInInstructionScreen';
import PricingScreen from './src/screens/PricingScreen';
import GuestRequirementScreen from './src/screens/GuestRequirementScreen';
import PreBookingMessageScreen from './src/screens/PreBookingMessage';
import FilterScreen from './src/screens/FilterScreen';
import RoomsScreen from './src/screens/RoomsScreen';
import CreateNewListingScreen from './src/screens/CreateNewListingScreen';
import AllReservationScreen from './src/screens/AllReservationScreen';
import CurrentReservationsScreen from './src/screens/CurrentReservation';
import WithdrawScreen from './src/screens/WithdrawScreen';
import PayoutScreen from './src/screens/PayoutScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import TwoStepVerificationScreen from './src/screens/TwoStepVerificationScreen';
import UpdatingAccountInformationScreen from './src/screens/UpdatingAccountInformationScreen';
import UpdatingBankInformationScreen from './src/screens/UpdatingBankInformationScreen';
import OffersAndPromoFromGlopilotScreen from './src/screens/OffersAndPromoFromGlopilotScreen';
import AllTransactionScreen from './src/screens/AllTransactionScreen';
import SupportScreen from './src/screens/SupportScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Calendar':
            iconName = 'calendar';
            break;
          case 'Statistics':
            iconName = 'bar-chart';
            break;
          case 'Messages':
            iconName = 'chatbubble';
            break;
          case 'Account':
            iconName = 'person';
            break;
          default:
            iconName = 'circle';
            break;
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      headerShown: false,
      tabBarActiveTintColor: '#4460EF',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        display: 'flex',
      },
    })}
  >
    <Tab.Screen name="Home" component={HomePage} />
    <Tab.Screen name="Calendar" component={CalendarScreen} />
    <Tab.Screen name="Statistics" component={StatisticScreen} />
    <Tab.Screen name="Messages" component={MessageScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AccountType" component={AccountTypeScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="PROPERTY" component={PropertyScreen} />
        <Stack.Screen name="LOCATION" component={LocationScreen} />
        <Stack.Screen name="MAPSCREEN" component={MapScreen} />
        <Stack.Screen name="AmenityScreen" component={AmenityScreen} />
        <Stack.Screen name="AddPhotoScreen" component={AddPhotoScreen} />
        <Stack.Screen name="AddListingScreen" component={AddListingScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
        <Stack.Screen name="PlaceNameScreen" component={PlaceNameScreen} />
        <Stack.Screen name="CreateProfileScreen" component={CreateProfileScreen} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
        <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} />
        <Stack.Screen name="PhoneScreen" component={PhoneScreen} />
        <Stack.Screen name="SettingScreen" component={SettingsScreen} />
        <Stack.Screen name="Host" component={HostPreferenceScreen} />
        <Stack.Screen name="Notice" component={NoticePeriodScreen} />
        <Stack.Screen name="NoticeBoard" component={NoticeBoardScreen} />
        <Stack.Screen name="PublishScreen" component={PublishScreen} />
        <Stack.Screen name="Notification" component={NotificationScreen} />
        <Stack.Screen name="ViewsBooking" component={ViewsBookingScreen} />
        <Stack.Screen name="TransactionHistory" component={TransactionHistoryScreen} />
        <Stack.Screen name="Conversation" component={ConversationScreen} />
        <Stack.Screen name="AllListings" component={AllListingsScreen} />
        <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
        <Stack.Screen name="ListingTitle" component={ListingTitleScreen} />
        <Stack.Screen name="AmenitiesSetting" component={AmenitiesSettingScreen} />
        <Stack.Screen name="ListingLocation" component={ListingLocationScreen} />
        <Stack.Screen name="GuestBooking" component={GuestBookingScreen} />
        <Stack.Screen name="Requirement" component={ListingRules} />
        <Stack.Screen name="Listing" component={Listing} />
        <Stack.Screen name="Cancellation" component={CancellationPolicyScreen} />
        <Stack.Screen name="AvailabilitySettings" component={AvailabilitySettings} />
        <Stack.Screen name="TripLenght" component={TripLength} />
        <Stack.Screen name="CheckInCheckOut" component={CheckInCheckOut} />
        <Stack.Screen name="Regulations" component={Regulations} />
        <Stack.Screen name="Status" component={StatusScreen} />
        <Stack.Screen name="MyProfile" component={MyProfile} />
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
        <Stack.Screen name="Wallet" component={Wallet} />
        <Stack.Screen name="NotificationSettings" component={NotificationSettings} />
        <Stack.Screen name="Privacy" component={PrivacyScreen} />
        <Stack.Screen name="Security" component={SecurityScreen} />
        <Stack.Screen name="HelpCenter" component={HelpCenterScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        <Stack.Screen name="DeleteAccount" component={DeleteAccountScreen} />
        <Stack.Screen name="Consent" component={ConsentScreen} />
        <Stack.Screen name="Warning" component={WarningScreen} />
        <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
        <Stack.Screen name="Verification" component={VerificationCodeScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="CarOwner" component={CarOwnerVerification} />
        <Stack.Screen name="Proof" component={ProofInsuranceScreen} />
        <Stack.Screen name="ProofConfirmation" component={ProofConfirmationScreen} />
        <Stack.Screen name="ProofSuccess" component={ProofSuccessScreen} />
        <Stack.Screen name="HomePageScreen" component={HomePageScreen} />
        <Stack.Screen name="Cars" component={CarsScreen} />
        <Stack.Screen name="AddCar" component={AddCarScreen} />
        <Stack.Screen name="AllBooking" component={AllBookingScreen} />
        <Stack.Screen name="Earnings" component={EarningsScreen} />
        <Stack.Screen name="AccountProfile" component={AccountProfile} />
        <Stack.Screen name="Users" component={UsersListScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ListingPhotoScreen" component={ListingPhotoScreen} /> 
        <Stack.Screen name="PropertyGuest" component={PropertyGuestScreen} />
        <Stack.Screen name="Description" component={ListingDescriptionScreen} />
        <Stack.Screen name="Accessibility" component={AccessibilityScreen} />
        <Stack.Screen name="Currency" component={CurrencyScreen} />
        <Stack.Screen name="Charges" component={AdditionalChargesScreen} />
        <Stack.Screen name="CheckInstruction" component={CheckInInstructionsScreen} />
        <Stack.Screen name="Pricing" component={PricingScreen} />
        <Stack.Screen name="GuestRequirements" component={GuestRequirementScreen} />
        <Stack.Screen name="PreBooking" component={PreBookingMessageScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
        <Stack.Screen name="Rooms" component={RoomsScreen} />
        <Stack.Screen name="CreateListing" component={CreateNewListingScreen} />
        <Stack.Screen name="ReservationList" component={AllReservationScreen} />
        <Stack.Screen name="CurrentReservation" component={CurrentReservationsScreen} />
        <Stack.Screen name="Withdraw" component={WithdrawScreen} />
        <Stack.Screen name="Payout" component={PayoutScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="TwoStep" component={TwoStepVerificationScreen} />
        <Stack.Screen name="AccountInfo" component={UpdatingAccountInformationScreen} />
        <Stack.Screen name="BankInfo" component={UpdatingBankInformationScreen} />
        <Stack.Screen name="Offers" component={OffersAndPromoFromGlopilotScreen} />
        <Stack.Screen name="Transaction" component={AllTransactionScreen} />
        <Stack.Screen name="Support" component={SupportScreen} />
        {/* Add other screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;