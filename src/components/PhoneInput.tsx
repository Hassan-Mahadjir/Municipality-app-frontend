import React, { useState, useEffect } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Text, View } from 'react-native';
import PhoneInput, { ICountry } from 'react-native-international-phone-number';

const PhoneInputComponent = () => {
  const { t } = useTranslation();
  const { control, setValue, watch } = useFormContext();

  const [selectedCountry, setSelectedCountry] = useState<null | ICountry>(null);
  const [borderColor, setBorderColor] = useState<string>('#848484');
  const [isOnFocus, setIsOnFocus] = useState<boolean>(false);
  const phone_label = t('phone_label');

  const phone = watch('phone');

  useEffect(() => {
    if (selectedCountry && phone) {
      const callingCode = selectedCountry.callingCode || '';
      const combinedPhoneNumber = `${callingCode} ${phone}`;
      setValue('phoneNumber', combinedPhoneNumber);
    }
  }, [phone, selectedCountry, setValue]);

  const handleOnFocus = () => {
    setIsOnFocus(true);
    setBorderColor('#FF8B20');
  };

  const handleOnBlur = () => {
    setIsOnFocus(false);
    setBorderColor('#848484');
  };

  const handleSelectedCountry = (country: ICountry) => {
    setSelectedCountry(country);
  };

  const handleInputValue = (phoneNumber: string) => {
    setValue('phone', phoneNumber);
  };

  return (
    <View style={{ marginTop: 10, marginBottom: 10 }}>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>{phone_label}</Text>
      <Controller
        name="phone"
        control={control}
        render={({ field: { value } }) => (
          <PhoneInput
            defaultCountry="TR"
            placeholder="(534) 543 54 53"
            value={value}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onChangePhoneNumber={handleInputValue}
            selectedCountry={selectedCountry}
            onChangeSelectedCountry={handleSelectedCountry}
            phoneInputStyles={{
              container: {
                backgroundColor: '#fff',
                borderWidth: isOnFocus ? 2 : 1,
                borderStyle: 'solid',
                borderColor: borderColor,
                height: 45,
                borderRadius: 12,
              },
              flagContainer: {
                borderTopLeftRadius: 12,
                borderBottomLeftRadius: 12,
                backgroundColor: '#f9f9f9',
                justifyContent: 'center',
              },
              callingCode: {
                fontSize: 17,
                color: '#000',
                fontWeight: '600',
              },
              input: {
                fontSize: 17,
                color: '#000',
                fontWeight: '600',
              },
            }}
          />
        )}
      />
      {/* Hidden input to store the combined phone number */}
      <Controller
        name="phoneNumber"
        control={control}
        render={() => <></>} // This hides the field from the UI
      />
    </View>
  );
};

export default PhoneInputComponent;
