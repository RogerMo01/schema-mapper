import { ApiRequest } from "../utils/Api";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";

interface Props {
  entity: string;
  handleChange: (e: SelectChangeEvent) => void;
}
export default function EntitySelect({ entity, handleChange }: Props) {
  const [menuItems, setMenuItems] = useState<string[]>([]);

  useEffect(() => {
    const sync = async () => {
      const resp = await ApiRequest("/entities", "GET")
      if(resp.ok){
        setMenuItems(resp.entities)
      } else {
        setMenuItems([])
      }
    }

    sync();
  }, [])
  
  return (
    <FormControl fullWidth>
      <InputLabel id="entity-label">Entidad</InputLabel>
      <Select
        labelId="entity-label"
        id="entity-select"
        value={entity}
        label="Entidad"
        onChange={handleChange}
        required
      >
        {menuItems.map((i) => <MenuItem key={i} value={i}>{i}</MenuItem>)}
      </Select>
    </FormControl>
  );
}
