package levels;

import cn.nukkit.Player;
import cn.nukkit.command.Command;
import cn.nukkit.command.CommandSender;
import cn.nukkit.event.EventHandler;
import cn.nukkit.event.Listener;
import cn.nukkit.event.entity.EntityDamageByEntityEvent;
import cn.nukkit.event.player.PlayerJoinEvent;
import cn.nukkit.plugin.PluginBase;

/**
 * Created by Walker on 8/15/2017.
 */
public class MainClass extends PluginBase implements Listener {
    @Override
    public void onEnable(){
        getServer().getPluginManager().registerEvents(this, this);
    }

    @Override
    public void onDisable(){
        saveConfig();
    }

    @EventHandler
    public void onPlayerKillEntity(EntityDamageByEntityEvent e){
        if(e.getDamager() instanceof Player){
            Player p = (Player) e.getDamager();
            if(getConfig().isInt(p.getName())) {
                getConfig().set(p.getName(), getConfig().getInt(p.getName()) + 1);
            }else{
                getConfig().set(p.getName(), 1);
            }
            p.sendMessage("You leveled up! Kill more things to level up more!");
            p.sendMessage("You are now level " + getConfig().getInt(p.getName()) + "!");
        }
    }

    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent e){
        if(getConfig().isInt(e.getPlayer().getName())){
            e.getPlayer().sendMessage("You are level " + getConfig().getInt(e.getPlayer().getName()) + "!");
        }else{
            e.getPlayer().sendMessage("You are level 0 :(");
        }
    }

    public boolean onCommand(CommandSender sender, Command cmd, String label, String[] args){
        if(cmd.getName().equals("level")){
            Player p = (Player) sender;
            p.sendMessage("You're level " + getConfig().getInt(p.getName()));
        }

        return true;
    }
}
