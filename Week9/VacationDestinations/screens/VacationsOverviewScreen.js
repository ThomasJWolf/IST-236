import { useLayoutEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import VacationItem from "../components/VacationItem";
import { COUNTRIES } from "../data/dummy-data";
import { VACATIONS } from "../data/dummy-data";

function VacationsOverviewScreen(props) {
  const countryId = props.route.params.countryId;

  useLayoutEffect(() => {
    const country = COUNTRIES.find((country) => country.id === countryId);
    props.navigation.setOptions({ title: country ? country.name : null });
  }, [countryId, props.navigation]);

  const displayedVacations = VACATIONS.filter((vacationItem) => {
    return vacationItem.countryId === countryId;
  });

  function renderVacationItem(itemData) {
    const vacationItemProps = {
      name: itemData.item.name,
      imageUrl: itemData.item.imageUrl,
      averageCost: itemData.item.averageCost,
      foundedYear: itemData.item.foundedYear,
      rating: itemData.item.rating,
      description: itemData.item.description,
      listIndex: itemData.index,
    };
    return <VacationItem {...vacationItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedVacations}
        keyExtractor={(item) => item.id}
        renderItem={renderVacationItem}
      />
    </View>
  );
}

export default VacationsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
