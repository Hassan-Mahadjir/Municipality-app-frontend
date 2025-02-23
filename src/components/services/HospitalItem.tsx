import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '@/constants/Colors';
import { scale, verticalScale } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

const HospitalItem = ({
    name,
    location,
    onSeeLocation,
    imageUri,
    phone
}: {
    name: string;
    location: string;
    phone:string;
    onSeeLocation: () => void;
    imageUri: string;
}) => {
    const {t} = useTranslation()
    return (
        <View>
            <TouchableOpacity onPress={onSeeLocation} style={styles.healthCard}>
                <View style={styles.iconContainer}>
                    <Image source={{ uri: imageUri }} style={styles.healthIcon} />
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.healthName}>{name}</Text>
                    <Text style={styles.healthLocation}>{location}</Text>
                    <View style={{flexDirection:'row', alignItems:'center'}}>

                    <Text>{t('phone')}{": "}</Text><Text style={styles.healthLocation}>{phone}</Text>

                    </View>

                    {/* <Text style={styles.seeLocation}>See Location</Text> */}
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    healthCard: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: scale(7), // Reduced padding
        marginVertical: verticalScale(6), // Reduced vertical margin
        borderRadius: scale(8), // Reduced border radius
        alignItems: 'center',
        justifyContent: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: verticalScale(2) },
        shadowOpacity: 0.1,
        shadowRadius: scale(4), // Reduced shadow radius
        elevation: 2, // Reduced elevation
    },
    iconContainer: {
        marginRight: scale(8), // Reduced margin
        paddingRight: scale(5), // Reduced padding
    },
    healthIcon: {
        width: scale(60), // Reduced width
        height: verticalScale(72), // Reduced height
        borderRadius: scale(1),
        resizeMode: 'cover',
    },
    detailsContainer: {
        flex: 1,
    },
    healthName: {
        fontWeight: 'bold',
        fontSize: scale(14), // Reduced font size
    },
    healthLocation: {
        color: COLORS.gray,
        marginVertical: verticalScale(4), // Reduced vertical margin
    },
    seeLocation: {
        color: COLORS.primary,
        // textDecorationLine: 'underline',
    },
});

export default HospitalItem;
